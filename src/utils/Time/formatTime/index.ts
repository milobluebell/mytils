import moment from 'moment';

/**
 * 
 * @func   unix时间戳转标准时间
 * @param  time       number(unix_time)
 * @param  formatter  string
 * @return            string
 */
const formatUnixTime = (time: number, formatter = 'YYYY/MM/DD HH:mm:ss') => {
  let momentedTime = null;
  if (time) {
    if (time.toString().length === 10) {
      momentedTime = moment(time * 1000).format(formatter);
    }
    if (time.toString().length === 13) {
      momentedTime = moment(time).format('YYYY/MM/DD HH:mm:ss');
    }
    return momentedTime || 'Invalid date';
  } else {
    return '--';
  }
};
export default formatUnixTime;