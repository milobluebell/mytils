const isArray = (param: any) => typeof param === 'object' && Object.prototype.toString.call(param) === '[object Array]';
export default isArray;