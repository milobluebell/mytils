const isObject = (param: any) => typeof param === 'object' && Object.prototype.toString.call(param) === '[object Object]'
export default isObject;