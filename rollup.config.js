import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';
import clear from 'rollup-plugin-clear';
import replace from 'rollup-plugin-replace';

const path = require('path');
const fs = require('fs');
const packageJson = require('./package.json');

const peerDependencies = Object.keys(packageJson.peerDependencies);
const projectName = packageJson.name;

const srcDir = 'src';
const compNames = fs.readdirSync(path.resolve(`${srcDir}/components`));
const compMaps = compNames.filter((item) => fs.lstatSync(`${path.resolve(srcDir + '/components')}/${item}`).isDirectory());
