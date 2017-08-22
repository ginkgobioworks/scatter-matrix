import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'src/scatter-matrix.js',
  external: ['d3'],
  globals: {
    d3: 'd3',
  },
  name: 'ScatterMatrix',
  output: [
    { file: pkg.browser, format: 'umd' },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    postcss(),
  ],
};
