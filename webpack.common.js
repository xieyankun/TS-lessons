// wepack通用配置文件
const path = require('path');
module.exports = {
  entry: ['babel-polyfill', './src/typescript/main.ts'],
  resolve:
    {
      extensions: ['.ts', '.js', '.json']
    },
};
