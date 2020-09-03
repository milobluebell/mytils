import { cloneDeep } from 'lodash-es';

/**
 *
 * purgeData($obj [, $predicate]) - 🍀 根据断言列表，清洗对象或数组
 *
 * @param  $obj        待清洗的对象
 * @param  $predicate  清洗断言（数组中的元素对应需要清洗掉的key）
 *
 */
const purgeData = ($obj: Record<string, unknown> | any[], $predicate?: string | string[]): any => {
  const predicates = typeof $predicate === 'string' ? [$predicate] : $predicate;
  const newObj = cloneDeep($obj);
  Object.entries(newObj).forEach((kv) => {
    const [key, value] = kv;
    if (value === undefined || value === null) {
      delete newObj[key];
    }
  });
  return newObj;
};
export default purgeData;
