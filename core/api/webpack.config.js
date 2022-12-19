import { resolve as _resolve } from 'path';
import nodeExternals from 'webpack-node-externals';
import { DefinePlugin } from 'webpack';

export const mode = 'production';
export const entry = _resolve(__dirname, 'src', 'index.ts');
export const externals = [
  nodeExternals({
    modulesDir: _resolve(__dirname, './node_modules'),
  }),
];
export const output = {
  path: _resolve(__dirname, 'dist', 'umd'),
  filename: 'index.js',
  libraryTarget: 'umd',
  library: '@baseline-protocol/api',
  globalObject: 'this'
};
export const resolve = {
  extensions: ['.js', '.ts'],
};
export const module = {
  rules: [
    {
      test: /\.ts$/,
      loader: "ts-loader",
      exclude: /(node_modules|test)/,
    },
  ],
};
export const plugins = [
  new DefinePlugin({
    pkg: require('./package.json'),
    window: {},
  }),
];
