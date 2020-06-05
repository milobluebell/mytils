/**
 *
 * hasProp($key, $targetObj) - 🍀判断对象是否存在某一属性
 *
 * @param   $key         待推断属性的key
 * @param   $targetObj   被推断对象
 */
const hasProp = ($key: PropertyKey, $targetObj: Record<string, any>): boolean => Object.prototype.hasOwnProperty.call($targetObj, $key);
export default hasProp;
