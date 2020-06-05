module.exports = {
  presets: [
    ['preact-cli/babel', { modules: 'commonjs' }],
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
