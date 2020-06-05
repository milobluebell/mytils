import { round } from 'lodash-es';
import getDataType from 'utils/Calc/getDatatype';
import hasProp from '../hasProp';

/**
 *
 * omitProps($string, $targetObj [, $prototypable]) - 🍀清洗对象的指定属性
 *
 * @param  $key           待清洗的属性的key或key的数组
 * @param  $targetObj     被清洗对象
 * @param  $prototypable  是否允许清洗原型链上的属性
 */
const omitProps = <T extends Record<string, any>, U extends string>($key: U | U[], $targetObj: T, $prototypable?: boolean): Omit<T, U> => {
  const targetType = getDataType($targetObj);
  if (targetType !== 'object') {
    throw new Error(`targetObj should be an object,but got ${targetType}`);
  }
  const keies: string[] = typeof $key === 'string' ? [$key] : $key;
  const result = JSON.parse(JSON.stringify($targetObj));
  if ($prototypable === true) {
    console.warn(`开启prototypable后将影响到对象原型链上的属性，请确保你明确自己在做什么`);
    for (const key in result) {
      if (keies.includes(key)) {
        delete result[key];
      }
    }
    return result;
  }
  keies.forEach((oneKey) => {
    if (hasProp(oneKey, result)) {
      delete result[oneKey];
    }
  });
  return result;
};
export default omitProps;
