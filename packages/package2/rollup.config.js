const typescript = require('@rollup/plugin-typescript');
const tsconfig = require('./tsconfig.json');

module.exports = {
  input: ['src/index.ts'],
  output: {
    preserveModules: true,
    format: 'esm',
    dir: 'dist',
  },
  plugins: [
    typescript({
      tsconfig: `./tsconfig.json`,
      declarationDir: 'dist',
      declaration: true,
    }),
  ],
  external: [
    'mobx',
  ],
};
