import isNumeric from 'validator/es/lib/isNumeric';
import isJSON from 'validator/es/lib/isJSON';
import Regs from 'src/utils/Regs/regs';

/**
 * 
 * @param string 接受一个string入参，一般来自<input/>
 */
const translateInputValue = (string: string) => {
  if (isNumeric(string, false) || string === `NaN`) {
    // 是数字
    return string === `NaN` ? NaN : string.includes('.') ? parseFloat(string) : parseInt(string, 10);
  } else {
    if (Regs.regExpLike.test(string)) {
      // 是正则
      return new RegExp(string);
    } else {
      const _string = string.replace(/\s*/g, '');
      if (Regs.objectLike.test(_string) && isJSON(_string)) {
        // 是对象或数组
        console.log(JSON.parse(_string));
        return JSON.parse(_string);
      } else {
        // 其余类型全部当作字符串
        return string;
      }
    }
  }
}
export default translateInputValue;