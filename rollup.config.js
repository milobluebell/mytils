import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
const path = require('path');
const fs = require('fs');

const packageJson = require('./package.json');
const srcDir = 'src';
// const utilNames = fs.readdirSync(path.resolve(`${srcDir}/utils`));
// const utilMaps = utilNames.filter((item) => fs.lstatSync(`${path.resolve(srcDir + '/utils')}/${item}`).isDirectory());
// const utils = utilMaps.reduce((prev, name) => {
//   prev[name] = `${srcDir}/utils/${name}/index.ts`;
//   return prev;
// }, {});
// utils['index'] = `${srcDir}/utils/index.ts`;

const basicConfig = function (type = 'es') {
  return {
    input: `${path.resolve(srcDir)}/utils/index.ts`,
    output: Object.assign({}, {
      indent: false,
      format: type,
      sourceMap: true,
      exports: 'named',
    }, type === 'es' ?
      { file: packageJson.module, } : type === 'cjs' ?
        { file: packageJson.main, } : {
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
  // if (item === 'es') {
  // config.input = `${path.resolve(srcDir)}/utils/**/*.ts`;
  // config.output['dir'] = packageJson.module;
  // config.output['entryFileNames'] = `[name]/[name].js`;
  // }
  return config;
});
