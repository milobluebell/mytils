import countdownFromDuration from '../index';

export const stringFormatter = `{d}:{hh}:{mm}:{ss}`;
export const objFormatter = {
  // 1min以内
  [`${1 * 60}s`]: '{ss}',
  // 2min以内
  [`${2 * 60}s`]: '{m}:{s}',
  // 3min以内
  [`${3 * 60}s`]: '{mm}:{ss}',
};
describe('countdownFromDuration', function() {
  const normalTestDesc = `duration was smaller than`;
  const testers = [
    {
      moreDesc: `1 hour`,
      duration: 25 * 60 - 30,
      toBe: `24:30`,
    },
    {
      moreDesc: `24 hour`,
      duration: 24 * 30 * 60 - 30,
      toBe: `11:59:30`,
    },
    {
      moreDesc: `72 hour`,
      duration: 3 * 24 * 60 * 60 - 40,
      toBe: `2:23:59:20`,
    },
    {
      moreDesc: `1 hour with configured string formatter`,
      duration: 25 * 60 - 30,
      formatter: stringFormatter,
      toBe: `0:00:24:30`,
    },
    {
      moreDesc: `24 hour with configured string formatter`,
      duration: 24 * 30 * 60 - 30,
      formatter: stringFormatter,
      toBe: `0:11:59:30`,
    },
    {
      moreDesc: `72 hour with configured string formatter`,
      duration: 3 * 24 * 60 * 60 - 40,
      formatter: stringFormatter,
      toBe: `2:23:59:20`,
    },
    {
      moreDesc: `1 min with configured object formatter`,
      duration: 1 * 60 - 1,
      formatter: objFormatter,
      toBe: `59`,
    },
    {
      moreDesc: `2 min with configured object formatter`,
      duration: 2 * 60 - 1,
      formatter: objFormatter,
      toBe: `1:59`,
    },
    {
      moreDesc: `3 min with configured object formatter`,
      duration: 3 * 60 - 1,
      formatter: objFormatter,
      toBe: `02:59`,
    },
  ];

  testers.forEach((rule: any) => {
    it(`${normalTestDesc} ${rule.moreDesc}`, function() {
      const duration = rule.duration;
      expect(countdownFromDuration(duration, rule?.formatter)).toBe(rule.toBe);
    });
  });
});
