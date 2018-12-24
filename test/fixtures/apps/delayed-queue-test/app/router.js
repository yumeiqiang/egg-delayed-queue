'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, delayedQueue'
  });
};
