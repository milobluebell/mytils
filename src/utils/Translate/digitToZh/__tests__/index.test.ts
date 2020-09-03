import digitToZh from '..';

describe('digitToZh', function() {
  const testers = [
    {
      desc: 'trans it within an empty string',
      tester: '',
      expectation: ``,
    },
    {
      desc: 'get chinese character in lowercased',
      tester: 12345678,
      expectation: `一千二百三十四万五千六百七十八`,
    },
    {
      desc: 'get chinese character in uppercased',
      tester: 1234506,
      more: true,
      expectation: `壹佰贰拾叁万肆仟伍佰零陆`,
    },
    {
      desc: 'get chinese character in huge casing',
      tester: 12345054321,
      expectation: `一百二十三亿四千五百〇五万四千三百二十一`,
    },
    {
      desc: 'get correct number desc using a zero initially',
      tester: '0012345054321',
      expectation: `一百二十三亿四千五百〇五万四千三百二十一`,
    },
  ];

  testers.forEach((rule: any) => {
    it(`${rule.desc}`, function() {
      expect(digitToZh(rule.tester, rule.more)).toBe(rule.expectation);
    });
  });
});
