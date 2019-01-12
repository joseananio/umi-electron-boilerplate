// ref: https://umijs.org/config/
export default {
  publicPath: './',
  // runtimePublicPath: true,
  base: '/',
  outputPath: '../../app/dist/renderer',
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'UmiElectron',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,

            /components\//,
          ],
        },
      },
    ],
  ],
};
