import moment from 'moment';
import { sortBy, findIndex } from 'lodash-es';
import { uniTime, formattedCountdown } from '../aux';

/**
 *
 * @func   倒计时 (两个指定时间)
 * @param  $startAt*  number(unix_time) 倒计时开始的时间
 * @param  $endAt*    number(unix_time) 倒计时结束的时间
 * @param  formatter  string
 * @return            string
 */
// @desc 指定的是小于这个时间(s)的时候的展示格式
export const formatMap = {
  // 1小时以内
  [`${60 * 60}s`]: '{mm}:{ss}',
  // 24h以内
  [`${60 * 60 * 24}s`]: '{h}:{mm}:{ss}',
  // 大于24h，且小于72h
  [`${60 * 60 * 24 * 5}s`]: '{d}:{hh}:{mm}:{ss}',
};
const countdown = ($startAt: number, $endAt: number, formatter?: string | object) => {
  const configuredFormat = (typeof formatter === 'string' ? { [`0s`]: formatter } : formatter) || formatMap;
  const startAt = moment(uniTime($startAt));
  const endAt = moment(uniTime($endAt));
  if (startAt.isSameOrBefore(endAt)) {
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
  } else throw new Error('start time should be earlier, but end time was');
};

export default countdown;
