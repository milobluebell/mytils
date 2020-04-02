import { formatMap } from '..';
import { sortBy, findIndex } from 'lodash-es';
import { formattedCountdown } from './../../aux';

/**
 *
 * @func   倒计时 (从现在开始到指定时间)
 * @param  $duration*  number(s) 持续时间（单位为s）
 * @param  formatter*  string
 * @return             string
 */
export const countdownDuration = ($duration: number, formatter?: string | object) => {
  const configuredFormat = (typeof formatter === 'string' ? { [`0s`]: formatter } : formatter) || formatMap;
  const duration = $duration.toString();
  if ($duration >= 0 && /^[0-9]+$/.test(duration)) {
    const mapKeysNums = sortBy(
      Object.keys(configuredFormat).map((item) => {
        const boundaryTime = parseInt(item.replace(/[^0-9]/g, ''));
        return boundaryTime;
      }),
    );
    let rangeIndex = findIndex(mapKeysNums, (item) => item >= $duration);
    const keyFlag = `${rangeIndex > -1 ? mapKeysNums[rangeIndex] : mapKeysNums[mapKeysNums.length - 1]}s`;
    const theFormat = configuredFormat[keyFlag];
    return formattedCountdown($duration * 1000, theFormat);
  } else throw new Error('invalid duration');
};
export default countdownDuration;
