import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import analyze from 'rollup-plugin-analyzer';

const path = require('path');
const packageJson = require('./package.json');

const srcDir = 'src';

const emitConfig = (type) => {
  return {
    input: `${path.resolve(srcDir)}/utils/index.ts`,
    output: Object.assign(
      {},
      {
        indent: false,
        format: type,
        sourceMap: true,
        exports: 'named',
        globals: {
          dayjs: 'dayjs',
          'lodash-es': 'lodashEs',
        },
      },
      type === 'umd'
        ? {
            file: packageJson.unpkg,
            name: packageJson.name,
          }
        : {
            dir: type === 'es' ? 'es' : 'dist/lib',
          },
    ),
    external: Object.keys(packageJson.peerDependencies || {}),
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.js'],
      }),
      json(),
      commonjs({
        dynamicRequireTargets: ['node_modules/dayjs/plugin/*.js'],
      }),
      typescript({
        useTsconfigDeclarationDir: true,
        compilerOptions: {
          declaration: type !== 'umd',
        },
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      analyze({
        summaryOnly: true,
      }),
    ].concat(
      type === 'umd'
        ? [
            terser({
              compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false,
              },
            }),
          ]
        : [],
    ),
  };
};

//
const inputor = require('./modules.js');

export default ['es', 'cjs', 'umd'].map((item) => {
  const config = emitConfig(item);
  if (item === 'es' || item === 'cjs') {
    config.input = inputor;
  }
  return config;
});
