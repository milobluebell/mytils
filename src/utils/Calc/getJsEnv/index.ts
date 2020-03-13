/**
 * 
 * @func 判断当前js宿主环境是浏览器还是node
 * @return   string   'browser' | 'node'
 */
const getJsEnv = () => {
  return (typeof window !== 'undefined') && (typeof global === 'undefined') ? 'browser' : 'node';
}
export default getJsEnv;