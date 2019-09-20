import webpack from 'webpack';
import path from 'path';
import { getPostCSSLoader } from '../webpack.config.loaders';

module.exports = async ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    'stories': path.resolve(__dirname, '../stories'),
    '~': path.resolve(__dirname, '../stories'),
  };

  config.module.rules.push({
    test: /\.stories\.js$/,
    loaders: require.resolve('@storybook/addon-storysource/loader'),
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    options: {
      docgenOptions: {
        alias: config.resolve.alias,
      }
    },
    enforce: 'post'
  });

  config.module.rules.push({
    test: /\.css$/,
    use: [
      getPostCSSLoader({}),
    ],
  });

  return config;
};

