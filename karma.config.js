var webpackConfig = require('./webpack.config');
webpackConfig.externals = {
  'cheerio': 'window',
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha', 'chai'],
    files: ['tests.webpack.js'],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader'
    ],
    reporters: ['spec'],
    colors: true,
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
