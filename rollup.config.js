import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
const path = require('path');
const fs = require('fs');

const packageJson = require('./package.json');
const srcDir = 'src';

const basicConfig = function (type = 'es') {
  return {
    input: `${path.resolve(srcDir)}/utils/index.ts`,
    output: Object.assign({}, {
      indent: false,
      format: type,
      sourceMap: true,
      exports: 'named',
      globals: {
        'moment': 'moment',
        '_': 'lodash-es',
      },
    }, type === 'es' ? { dir: packageJson.module, } :
      type === 'cjs' ? { file: packageJson.main, } :
        {
          file: packageJson.unpkg,
          name: packageJson.name,
        }),
    external: Object.keys(packageJson.peerDependencies || {}),
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.js']
      }),
      json(),
      typescript({
        useTsconfigDeclarationDir: true,
        compilerOptions: {
          declaration: type === 'umd' ? false : true
        }
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ].concat(type === 'umd' ? [
      terser({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })] : []),
  }
}

//
export default ['es', 'cjs', 'umd'].map(item => {
  const config = basicConfig(item);
  if (item === 'es') {
    config.input = require('./modules.js');
    // config.output['entryFileNames'] = `[name].js`;
  }
  return config;
});
