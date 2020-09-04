#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const prefix = './src/utils';
const genModules = ($file) => {
  const content = fs
    .readFileSync($file)
    .toString()
    .replace(/\/\/ (.)*/g, '');

  const modules = {
    index: path.join(path.resolve(prefix)),
  };
  content.split(`export { default as `).forEach((module) => {
    if (module.includes(' } from ')) {
      const [key, value] = module.split(' } from ');
      modules[key] = path.join(path.resolve(prefix), value.replace(/('|\\';|\\|\n|;)/g, ''));
    }
  });

  return modules;
};

module.exports = { genModules };
