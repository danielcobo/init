import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const newOutput = function newOutput(format) {
  return {
    input: './src/index.js',
    output: {
      name: 'bundle',
      file: './dist/' + format + '/bundle.min.js',
      format: format,
      preferConst: true,
    },
    plugins: [
      nodeResolve(),
      commonjs({
        sourceMap: false,
      }),
      terser(),
    ],
  };
};

export default [newOutput('iife'), newOutput('esm')];
