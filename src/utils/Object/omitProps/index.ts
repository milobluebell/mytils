import getDataType from 'src/utils/Calc/getDatatype';
import cloneDeep from 'lodash.clonedeep';
import hasProp from '../hasProp';

/**
 *
 * omitProps($string, $targetObj) - 🍀 清洗对象的指定属性
 *
 * @param  $key           待清洗的属性的key或key的数组
 * @param  $targetObj     被清洗对象
 */
const omitProps = <T extends { [key: string]: any }, U extends string>($key: U | U[], $targetObj: T): Omit<T, U> => {
  const targetType = getDataType($targetObj);
  if (!$targetObj) {
    return $targetObj;
  }
  if (!Object.keys($targetObj).length) {
    return cloneDeep($targetObj);
  }
  if (targetType !== 'object') {
    throw new Error(`second param targetObj should be an object,but got ${targetType}`);
  }
  const keies: string[] = typeof $key === 'string' ? [$key] : $key;
  const result = cloneDeep($targetObj);
  keies.forEach((oneKey) => {
    if (hasProp(oneKey, result)) {
      delete result[oneKey];
    }
  });
  return result;
};
export default omitProps;
