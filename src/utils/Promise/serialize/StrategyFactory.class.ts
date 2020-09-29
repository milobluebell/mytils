import { IHttpcodeReflection, IStrategy } from './index.type';
import { IExtendsResponse } from '.';

/**
 * MAIN CLASS
 */
export default class PromiseStrategy {
  success: (res: IExtendsResponse) => void;

  fail: (err) => void;

  httpcodeRefs: IStrategy['httpcodeRefs'];

  codeRefs: IStrategy['codeRefs'] = null;

  constructor($strategy: IStrategy) {
    this.success = $strategy.success;
    this.fail = $strategy.fail;
    this.httpcodeRefs = $strategy.httpcodeRefs || null;
    this.codeRefs = $strategy.codeRefs || null;
  }
}

/**
 * 预设httpcode处理策略
 */
// export const HttpErrorCatcherStrategy = new PromiseStrategy();
