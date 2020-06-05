import getDataType from 'src/utils/Calc/getDatatype';
import hasProp from '../hasProp';

/**
 *
 * omitProps($string, $targetObj [, $prototypable]) - 🍀清洗对象的指定属性
 *
 * @param  $key           待清洗的属性的key或key的数组
 * @param  $targetObj     被清洗对象
 */
const omitProps = <T extends { [key: string]: any }, U extends string>($key: U | U[], $targetObj: T): Omit<T, U> => {
  const targetType = getDataType($targetObj);
  if (targetType !== 'object') {
    throw new Error(`second param targetObj should be an object,but got ${targetType}`);
  }
  const keies: string[] = typeof $key === 'string' ? [$key] : $key;
  const result = JSON.parse(JSON.stringify($targetObj));
  keies.forEach((oneKey) => {
    if (hasProp(oneKey, result)) {
      delete result[oneKey];
    }
  });
  return result;
};
export default omitProps;
