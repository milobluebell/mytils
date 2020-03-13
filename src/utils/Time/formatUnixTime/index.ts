import moment from 'moment';
import { uniTime } from '../aux';

/**
 * 
 * @func   unix时间戳转ISO标准时间
 * @param  $time       number(unix_time)
 * @param  $formatter  string
 * @return             string
 */
const formatUnixTime = ($unixTime: number, $formatter = 'YYYY/MM/DD HH:mm:ss') => moment(uniTime($unixTime)).format($formatter);
export default formatUnixTime;