const numericCharAlias = [
  {
    lowercase: '〇',
    uppcase: '零',
  },
  {
    lowercase: '一',
    uppcase: '壹',
  },
  {
    lowercase: '二',
    uppcase: '贰',
  },
  {
    lowercase: '三',
    uppcase: '叁',
  },
  {
    lowercase: '四',
    uppcase: '肆',
  },
  {
    lowercase: '五',
    uppcase: '伍',
  },
  {
    lowercase: '六',
    uppcase: '陆',
  },
  {
    lowercase: '七',
    uppcase: '柒',
  },
  {
    lowercase: '八',
    uppcase: '捌',
  },
  {
    lowercase: '九',
    uppcase: '玖',
  },
];

const unitAlias = [
  {
    lowercase: '千',
    uppcase: '仟',
  },
  {
    lowercase: '百',
    uppcase: '佰',
  },
  {
    lowercase: '十',
    uppcase: '拾',
  },
];

const quotAlias = [
  {
    lowercase: '万',
    uppcase: '万',
  },
  {
    lowercase: '亿',
    uppcase: '万',
  },
  {
    lowercase: '兆',
    uppcase: '万',
  },
];

/**
 *
 * numberToZh($number [, $isCapital]) - 🍀 数字转中文
 *
 * @param  $number      待转数字或字符串
 * @param  $isCapital  是否为"大写中文"
 *
 */
const numberToZh = ($number: number, $isCapital?: boolean): string => {
  if (!$number) {
    return '';
  }

  const [digit, afterDecimals = ''] = String(Number($number)).split('.');
  const zhChars = Object.values(numericCharAlias).map((alias) => ($isCapital !== true ? alias.lowercase : alias.uppcase));
  const theZero = zhChars[0];
  const units = Object.values(unitAlias)
    .map((alias) => ($isCapital !== true ? alias.lowercase : alias.uppcase))
    .concat(['']);
  const quots = Object.values(quotAlias)
    .map((alias) => ($isCapital !== true ? alias.lowercase : alias.uppcase))
    .concat(['不支持长度']);

  // 需要处理的分片处
  let breakLen = Math.ceil(digit.length / 4);
  let notBreakSegment = digit.length % 4 || 4;
  // 每次循环的当前分片
  let segment;
  //
  const zeroFlag = [];
  let result = '';

  while (breakLen > 0) {
    if (!result) {
      // 第一次循环
      segment = digit.slice(0, notBreakSegment);
      const segmentLen = segment.length;
      for (let i = 0; i < segmentLen; i += 1) {
        result += zhChars[segment[i]] + units[4 - segmentLen + i];
        if (i === segmentLen - 1 && breakLen > 1) {
          result += quots[breakLen - 2];
        }
      }
    } else {
      segment = digit.slice(notBreakSegment, notBreakSegment + 4);
      notBreakSegment += 4;
      for (let j = 0; j < segment.length; j += 1) {
        if (segment[j] !== 0 && segment[j] !== '0') {
          if (zeroFlag.length > 0) {
            result += theZero + zhChars[segment[j]] + units[j];
            zeroFlag.length = 0;
          } else {
            result += zhChars[segment[j]] + units[j];
          }
          // 判断是否需要加上 quots 单位
          if (j === segment.length - 1 && breakLen > 1) {
            result += quots[breakLen - 3] || '';
          }
        } else {
          zeroFlag.push(segment[j]);
          // continue;
        }
      }
      breakLen -= 1;
    }
  }
  // 如果存在小数点，则字面翻译
  if (afterDecimals !== '') {
    result += `点`;
    for (let k = 0; k < afterDecimals.length; k += 1) {
      result += zhChars[parseInt(afterDecimals[k], 10)];
    }
  }
  return result.replace(/^一十/, '十');
};

export default numberToZh;
