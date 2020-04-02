import moment from 'moment';

// js以ms为unix时间单位，所以需要对数据单位进行统一 | @return number
export const uniTime = (unixTime: number) => {
  const $length = unixTime.toString().length;
  if ($length !== 10 && $length !== 13) throw new Error('it is an unavailable unix timestamp');
  else return $length === 10 ? unixTime * 1000 : unixTime;
};

// 补位，如果出现4:14:7则补应补位为04:14:07 | @return string
export const makeupWithO = ($ipt: string | number) => {
  const param = typeof $ipt === 'number' ? $ipt.toString() : $ipt;
  return param.length === 1 ? `0${param}` : param;
};

// 根据duration和一个确定的format，计算出倒计时 | @return string
const replacements = [
  { reg: /\{y+\}/g, text: 'years', unsupplementalReg: /\{y\}/g },
  { reg: /\{M+\}/g, text: 'months', unsupplementalReg: /\{M\}/g },
  { reg: /\{w+\}/g, text: 'weeks', unsupplementalReg: /\{w\}/g },
  { reg: /\{d+\}/g, text: 'days', unsupplementalReg: /\{d\}/g },
  { reg: /\{h+\}/g, text: 'hours', unsupplementalReg: /\{h\}/g },
  { reg: /\{m+\}/g, text: 'minutes', unsupplementalReg: /\{m\}/g },
  { reg: /\{s+\}/g, text: 'seconds', unsupplementalReg: /\{s\}/g },
];
export const formattedCountdown = (duration: number, formatter: string) => {
  const $duration = moment.duration(duration);
  let result = formatter;
  replacements.forEach((rule) => {
    result = result.replace(rule.unsupplementalReg, $duration[rule.text]()).replace(rule.reg, makeupWithO($duration[rule.text]()));
  });
  return result;
};
