/**
 *
 * getJsEnv() - 🍀 判断当前js宿主环境
 */
const getJsEnv = (): 'browser' | 'node' => (window && typeof window === 'object' ? 'browser' : 'node');
export default getJsEnv;
