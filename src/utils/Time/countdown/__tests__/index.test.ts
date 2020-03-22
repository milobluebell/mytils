import countdown from '../index';
import { stringFormatter, objFormatter } from '../fromDuration/__tests__/index.test';

describe('countdown', function() {
  const normalTestDesc = `calculated gutter was smaller than`;
  const testers = [
    {
      moreDesc: `1 hour`,
      startAt: 1577812953,
      endAt: 1577812953 + 130,
      toBe: `02:10`,
    },
    {
      moreDesc: `24 hour`,
      startAt: 1577812953,
      endAt: 1577812953 + 60 * 60 * 12,
      toBe: `12:00:00`,
    },
    {
      moreDesc: `72 hour`,
      duration: 3 * 24 * 60 * 60 - 40,
      startAt: 1577812953,
      endAt: 1577812953 + 60 * 60 * 40,
      toBe: `1:16:00:00`,
    },
    {
      moreDesc: `1 hour with configured string formatter`,
      startAt: 1577812953,
      endAt: 1577812953 + 60 * 2 + 10,
      formatter: stringFormatter,
      toBe: `0:00:02:10`,
    },
    {
      moreDesc: `24 hour with configured string formatter`,
      startAt: 1577812953,
      endAt: 1577812953 + 60 * 60 * 12 + 10,
      formatter: stringFormatter,
      toBe: `0:12:00:10`,
    },
    {
      moreDesc: `72 hour with configured string formatter`,
      startAt: 1577812953,
      endAt: 1577812953 + 60 * 60 * 25 + 10,
      formatter: stringFormatter,
      toBe: `1:01:00:10`,
    },
    {
      moreDesc: `1 min with configured object formatter`,
      startAt: 1577812953,
      endAt: 1577812953 + 40,
      formatter: objFormatter,
      toBe: `40`,
    },
    {
      moreDesc: `2 min with configured object formatter`,
      startAt: 1577812953,
      endAt: 1577812953 + 90,
      formatter: objFormatter,
      toBe: `1:30`,
    },
    {
      moreDesc: `3 min with configured object formatter`,
      startAt: 1577812953,
      endAt: 1577812953 + 150,
      formatter: objFormatter,
      toBe: `0:0:0, 00:02:30`,
    },
  ];

  testers.forEach((rule: any) => {
    it(`${normalTestDesc} ${rule.moreDesc}`, function() {
      expect(countdown(rule.startAt, rule.endAt, rule?.formatter)).toBe(rule.toBe);
    });
  });
});
