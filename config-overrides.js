const path = require('path');
const {
  override,
  addWebpackAlias,
  addWebpackExternals,
  // addWebpackPlugin,
} = require('customize-cra');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// 添加 @ 别名
const webpackAlias = addWebpackAlias({
  '@': path.resolve(__dirname, 'src'),
});

// Cdn配置
module.exports = override(
  webpackAlias,
  addWebpackExternals({
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    axios: 'axios',
    antd: 'antd',
    dayjs: 'dayjs',
  })
  // addWebpackPlugin(new BundleAnalyzerPlugin({ analyzerMode: 'static' }))
);
