import round from 'lodash.round';
import { supplyZero } from '../aux';

const maxPrecisionBoundary = 6;
/**
 *
 * getRatioFromNum($number [, $precision , $supplemental]) - 🍀 number转百分比字符串
 *
 * @param $number        待转换数字
 * @param $precision     精度（default：数字的字符长度）
 * @param $supplemental  是否为了满足precision而补0是否补位（default：false）
 *
 * @解释   $supplemental  比如getRatioFromNum(0.24, 2, false)为24%,getRatioFromNum(0.24, 2, true)则为24.00%
 */
const getRatioFromNum = ($number: number, $precision?: number, $supplemental?: boolean): string => {
  if ($precision && ($precision < 0 - maxPrecisionBoundary || $precision > maxPrecisionBoundary)) {
    console.warn(`precision was too ${$precision < 0 ? 'low' : 'high'} to makes sense`);
  }
  const precision = $precision || $precision === 0 ? $precision : $number.toString().length;
  const result = round($number * 100, precision);
  return `${$supplemental ? supplyZero(result, precision) : result}%`;
};
export default getRatioFromNum;
