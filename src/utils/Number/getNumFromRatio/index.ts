import round from 'lodash.round';
import { supplyZero } from '../aux';

/**
 *
 * getNumFromRatio($ratio [, $precision, $supplemental]) - 🍀 百分比字符串转number
 *
 * @param $ratio         待转换的百分比字符串
 * @param $precision     精度（default：数字的字符长度）
 * @param $supplemental  是否为了满足precision而补0（default：false）
 *
 * @解释   $supplemental  比如getNumFromRatio(24%, 4, false)为0.24,getNumFromRatio(24%, 4, true)则为0.2400
 */
const getNumFromRatio = ($ratio: string, $precision?: number, $supplemental?: boolean): number | string => {
  if (!$ratio.includes('%')) {
    throw new Error(`ratio param should include '%' character`);
  }
  const theNum = parseFloat($ratio.split('%')[0]);
  const precision = $precision || $precision === 0 ? $precision : $ratio.length;
  const result = round(theNum / 100, precision);
  return $supplemental ? supplyZero(result, precision) : result;
};
export default getNumFromRatio;
