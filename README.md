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

A priority queue queue backed by redis, built for eggjs.

## Install

```bash
$ yarn add egg-delayed-queue
```

## Usage

```js
// {app_root}/config/plugin.js
exports.queue = {
  enable: true,
  package: 'egg-delayed-queue',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
'use strict';
exports.queue = {
  client: {
    queuePrefix: 'q',
    redis: {
      port: 6379,
      host: '127.0.0.1',
      auth: '',
      db: 3,
      // see https://github.com/mranney/node_redis#rediscreateclient
      options: {
      },
    },
  },
  // clients: {}
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
// 在 app.js 里面调用 如果需要用到ctx 可以 const ctx = app.createAnonymousContext();
app.queue.process('orderNo', (job, done) => {
  // 这里可以调用service里面的方法来消费这些信息
  const ctx = app.createAnonymousContext();
    ctx.service.home.dealOrder(job.data, done); // dealOrder是自定义的方法
});

// 在需要的地方订阅一个消息
app.queue.create('orderNo', {
    orderNo: '1111111',
    create_time: Date.now()
}).delay(milliseconds) // 延时多少毫秒
  .save();
```

form more config please see [here](https://github.com/Automattic/kue)

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
