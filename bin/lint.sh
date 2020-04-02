#!/usr/bin/env bash

set -xe

npx eslint --ext ts,js src types src types --fix &&
npx tsc --project tsconfig.json --outDir build/.tsc-check/ && tsc --project tsconfig.json --outDir build/.tsc-check/
