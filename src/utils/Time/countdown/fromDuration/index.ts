import { sortBy, findIndex } from 'lodash-es';
import { formatMap } from '..';
import { formattedCountdown, IFormatter } from '../../aux';

/**
 *
 * countdownDuration($duration [, $formatter]) - 🍀根据时间长度显示倒计时
 *
 * @param  $duration   持续时间（单位为s）
 * @param  $formatter  倒计时输出格式
 *
 * @解释    $formatter  可以根据阶段显示不同内容，格式举例：
 *
 * {[`${60 * 60}s`]: '{mm}:{ss}'}
 */
export const countdownDuration = ($duration: number, formatter?: string | IFormatter): string => {
  const configuredFormat = (typeof formatter === 'string' ? { [`0s`]: formatter } : formatter) || formatMap;
  const duration = $duration.toString();
  if ($duration >= 0 && /^[0-9]+$/.test(duration)) {
    const mapKeysNums = sortBy(
      Object.keys(configuredFormat).map((item) => {
        const boundaryTime = parseInt(item.replace(/[^0-9]/g, ''), 10);
        return boundaryTime;
      }),
    );
    const rangeIndex = findIndex(mapKeysNums, (item) => item >= $duration);
    const keyFlag = `${rangeIndex > -1 ? mapKeysNums[rangeIndex] : mapKeysNums[mapKeysNums.length - 1]}s`;
    const theFormat = configuredFormat[keyFlag];
    return formattedCountdown($duration * 1000, theFormat);
  } else throw new Error('it is an invalid duration');
};
export default countdownDuration;
