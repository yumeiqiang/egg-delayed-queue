'use strict';

/**
 * egg-delayed-queue default config
 * @member Config#queue
 * @property {String} SOME_KEY - some description
 */
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
