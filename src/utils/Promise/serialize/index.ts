import getDataType from 'src/utils/Calc/getDatatype';

export interface IExtendsResponse extends Omit<Partial<Response>, 'status'> {
  status: 'fulfilled' | 'rejected';
  order: number;
  result: any | null;
}
interface IConfig {
  continuous?: boolean;
  callback?(params: IExtendsResponse): void | boolean;
  strategy?: { success(res: IExtendsResponse): void; fail(err): void };
}

/**
 *
 * serialize($promises [, $config]) - 🍀 按照一定顺序执行异步操作
 *
 * @param           $promises      待处理字符串。
 * @param           $config        选项。
 * @param.config    continuous     是否不会被打断。
 * @param.config    callback       每次promise成功或失败时的回调。
 * @param.config    strategy       处理整个串行结束后的策略。
 *
 * @解释1            config.continuous    如果为false，则如果promises被reject或发生错误，则串行停止；反之则不停止
 */
const serialize = ($promises: readonly ((args?: any) => Promise<any>)[], $config?: IConfig): Promise<any> => {
  // 全部执行完成 或 部分中断时会进入rsl或rej
  const serialization = new Promise(async (rsl, rej) => {
    const { continuous = false, callback } = $config || {};
    const resolves = [];
    const rejects = [];
    for (let i = 0; i < $promises.length; i += 1) {
      const promise = $promises[i];
      try {
        const result = await promise();
        const resolvedData = { status: 'fulfilled', order: i, result: result || null } as const;
        resolves.push(resolvedData);
        callback?.(resolvedData);
        if (i === $promises.length - 1) {
          rsl([resolves, rejects]);
        }
      } catch (err) {
        const newErr =
          getDataType(err) === 'object'
            ? err
            : {
                result: err,
              };
        newErr.status = 'rejected';
        newErr.order = i;
        rejects.push(newErr);
        callback?.(newErr);
        if (i === $promises.length - 1) {
          rej([resolves, rejects]);
        }
        if (!continuous) {
          rej([resolves, rejects]);
          break;
        }
      }
    }
  });
  return serialization;
};

export default serialize;
