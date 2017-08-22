import pkg from './package.json';

export default [
  {
    entry: 'src/scatter-matrix.js',
    dest: pkg.browser,
    format: 'umd',
    moduleName: 'scatter-matrix',
  },
  {
    entry: 'src/scatter-matrix.js',
    targets: [
      { dest: pkg.main, format: 'cjs' },
      { dest: pkg.module, format: 'es' },
    ],
  },
];
