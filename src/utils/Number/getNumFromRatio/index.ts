import { round } from 'lodash-es';
import { supplyZero } from '../aux';

/**
 * 
 * @func 将传入的百分比值，转换为number
 * @param $ratio      string*  将要被转换的数字，通常为小数
 * @param $precision  number*  精度(小数点后位数)
 * @return            number
 */
const getNumFromRatio = ($ratio: string, $precision?: number, $supplemental?: boolean) => {
  if (!$ratio.includes('%')) { throw new Error(`ratio param should include '%' character`); }
  const theNum = parseFloat($ratio.split('%')[0]);
  const precision = ($precision || $precision === 0) ?$precision: $ratio.length;
  const result = round(theNum / 100, precision);
  return $supplemental ? supplyZero(result, precision) : result;
}
export default getNumFromRatio;