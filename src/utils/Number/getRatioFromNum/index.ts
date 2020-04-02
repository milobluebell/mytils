import { round } from 'lodash-es';
import { supplyZero } from '../aux';

/**
 *
 * @func 将传入的number，转换为百分比字符串
 * @param $number        number*  将要被转换的数字，通常为小数
 * @param $precision     number   精度(小数点后位数)
 * @param $supplemental  boolean  是否补位，比如translateIntoRatio(0.24, 2, false)为24%,
 *                                        translateIntoRatio(0.24, 2, true)则为24.00%
 * @return               string
 */
const maxPrecisionBoundary = 6;
const getRatioFromNum = ($number: number, $precision?: number, $supplemental?: boolean): string => {
  if ($precision && ($precision < 0 - maxPrecisionBoundary || $precision > maxPrecisionBoundary)) {
    console.warn(`precision was too ${$precision < 0 ? 'low' : 'high'} to makes sense`);
  }
  const precision = $precision || $precision === 0 ? $precision : $number.toString().length;
  const result = round($number * 100, precision);
  return `${$supplemental ? supplyZero(result, precision) : result}%`;
};
export default getRatioFromNum;
