import isNumeric from 'validator/es/lib/isNumeric';
import isJSON from 'validator/es/lib/isJSON';
import Regs from 'src/utils/Regs/regs';

/**
 * 
 * @param string 接受一个string入参，一般来自<input/>
 * @func 根据input标签输入的内容，自动转换成javascript对应的数据类型。否则会被默认为string。
 */
const translateInputValue = (_string: string) => {
  if (typeof _string !== 'string') {
    // 是数字
    return _string;
  } else {
    if (Regs.regExpLike.test(_string)) {
      // 是正则
      const regContentArr = _string.split('');
      regContentArr[0] = '';
      regContentArr[regContentArr.length - 1] = '';
      const regContent = regContentArr.join('');
      return new RegExp(regContent);
    } else {
      const __string = _string.replace(/\s*/g, '');
      if (Regs.objectLike.test(__string)) {
        // 是对象或数组
        return JSON.parse(__string);
      } else if (Regs.stringLike.test(_string)) {
        const contentArr = _string.split('');
        contentArr[0] = '';
        contentArr[contentArr.length - 1] = '';
        return contentArr.join('');
      } else {
        // 其余类型全部当作字符串
        if (isNumeric(_string, false) || _string === `NaN`) {
          // 是数字形字符串
          return _string === `NaN` ? NaN : _string.includes('.') ? parseFloat(_string) : parseInt(_string, 10);
        } else return __string;
      }
    }
  }
}
export default translateInputValue;