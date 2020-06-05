import dayjs from 'dayjs';
import { sortBy, findIndex } from 'lodash-es';
import { uniTime, formattedCountdown, IFormatter } from '../aux';

// @desc 指定的是小于这个时间(s)的时候的展示格式
export const formatMap = {
  // 1小时以内
  [`${60 * 60}s`]: '{mm}:{ss}',
  // 24h以内
  [`${60 * 60 * 24}s`]: '{h}:{mm}:{ss}',
  // 大于24h，且小于72h
  [`${60 * 60 * 24 * 5}s`]: '{d}:{hh}:{mm}:{ss}',
};
/**
 *
 * countdown($startAt, $endAt [, formatter]) - 🍀根据两个UNIX时间展示倒计时
 *
 * @param  $startAt   倒计时开始的时间（小值）
 * @param  $endAt      倒计时结束的时间（大值）
 * @param  $formatter  倒计时输出格式
 *
 * @解释    $formatter  可以根据阶段显示不同内容，格式举例：
 *
 * {[`${60 * 60}s`]: '{mm}:{ss}'}
 */
const countdown = ($startAt: number, $endAt: number, formatter?: string | IFormatter): string => {
  const configuredFormat = (typeof formatter === 'string' ? { [`0s`]: formatter } : formatter) || formatMap;
  const startAt = dayjs(uniTime($startAt));
  const endAt = dayjs(uniTime($endAt));
  if (startAt.isBefore(endAt)) {
    const gutter = endAt.diff(startAt);
    const mapKeysNums = sortBy(
      Object.keys(configuredFormat).map((item) => {
        const boundaryTime = parseInt(item.replace(/[^0-9]/g, ''), 10);
        return boundaryTime;
      }),
    );
    const rangeIndex = findIndex(mapKeysNums, (item) => item * 1000 >= gutter);
    const keyFlag = `${rangeIndex > -1 ? mapKeysNums[rangeIndex] : mapKeysNums[mapKeysNums.length - 1]}s`;
    const theFormat = configuredFormat[keyFlag];
    return formattedCountdown(gutter, theFormat);
  } else throw new Error('start time should be earlier, but it not');
};

export default countdown;
