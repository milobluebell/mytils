import moment from 'moment';



// js以ms为unix时间单位，而php/java等以s，所以需要对数据单位进行统一 | @return number
export const uniTime = (unix_time: number) => {
  const $length = unix_time.toString().length;
  if ($length !== 10 && $length !== 13)
    throw new Error('it is an unavailable unix timestamp');
  else
    return $length === 10 ? unix_time * 1000 : unix_time
}



// 补位，如果出现4:14:7则补应补位为04:14:07 | @return string
export const makeupWithO = ($ipt: string | number) => {
  const param = typeof $ipt === 'number' ? $ipt.toString() : $ipt;
  return param.length === 1 ? `0${param}` : param;
}



// 根据duration和一个确定的format，计算出倒计时
const replacements = [
  { reg: /\{y+\}/g, text: 'years' },
  { reg: /\{M+\}/g, text: 'months' },
  { reg: /\{w+\}/g, text: 'weeks' },
  { reg: /\{d+\}/g, text: 'days' },
  { reg: /\{h+\}/g, text: 'hours' },
  { reg: /\{m+\}/g, text: 'minutes' },
  { reg: /\{s+\}/g, text: 'seconds' },
]
export const formattedCountdown = (duration: number, formatter: string) => {
  const _duration = moment.duration(duration);
  let result = formatter;
  replacements.forEach((rule) => {
    result = result.replace(rule.reg, makeupWithO(_duration[rule.text]()));
  });
  return result;
} 