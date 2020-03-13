import moment from 'moment';
import { uniTime } from './../aux';

/**
 * 
 * @func   unix时间戳转标准时间
 * @param  time       number(unix_time)
 * @param  formatter  string
 * @return            string
 */
const formatUnixTime = (time: number, formatter = 'YYYY/MM/DD HH:mm:ss') => moment(uniTime(time)).format(formatter);
export default formatUnixTime;