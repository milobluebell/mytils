import { cloneDeep } from 'lodash-es';
import getDataType from 'src/utils/Calc/getDatatype';

type supporttedPredicateType = string | boolean | number | symbol | undefined | null;
const defaultPredicates = [undefined, null];
/**
 *
 * purgeData($obj [, $predicates]) - 🍀 根据断言，清洗对象或数组的无用数据
 *
 * @param  $obj         待清洗的对象
 * @param  $predicates  清洗断言（数组中的元素对应需要清洗掉的key）
 *
 */
const purgeData = ($obj: Record<string, unknown> | any[], $predicates?: supporttedPredicateType | supporttedPredicateType[]): Record<string | symbol, any> | any[] => {
  const isArray = getDataType($obj) === 'array';
  const hasSpecified = !!$predicates;
  const predicates = (hasSpecified ? (typeof $predicates === 'string' ? [$predicates] : $predicates) : defaultPredicates) as supporttedPredicateType[];
  let newObj = cloneDeep($obj);

  if (isArray) {
    newObj = (newObj as supporttedPredicateType[]).filter((item: supporttedPredicateType) => !predicates.includes(item));
  } else {
    Object.entries(newObj).forEach((kv) => {
      const [key, value] = kv;
      if (predicates.includes(value)) {
        delete newObj[key];
      }
    });
  }
  return newObj;
};
export default purgeData;
