# egg-delayed-queue

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-delayed-queue.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-delayed-queue
[travis-image]: https://img.shields.io/travis/eggjs/egg-delayed-queue.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-delayed-queue
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-delayed-queue.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-delayed-queue?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-delayed-queue.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-delayed-queue
[snyk-image]: https://snyk.io/test/npm/egg-delayed-queue/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-delayed-queue
[download-image]: https://img.shields.io/npm/dm/egg-delayed-queue.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-delayed-queue

基于kue的任务队列

## 依赖说明

### 依赖的插件

## 开启插件

```js
// config/plugin.js
exports.queue = {
  enable: true,
  package: 'egg-delayed-queue',
};
```

## 使用场景

- 订单未付款自动取消订单，等一系列消费信息

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
