import countdown from '..';

/**
 *
 * @func   倒计时 (从现在开始到指定时间)
 * @param  $endAt*    unix_time  结束时间
 * @param  formatter  string
 * @return            string
 */
export const countdownNow = ($endAt: number, formatter?: string | object) => countdown(new Date().getTime(), $endAt, formatter);
export default countdownNow;
