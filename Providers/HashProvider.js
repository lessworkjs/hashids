'use strict';

const {
  ServiceProvider
} = require('adonis-fold');

class HashProvider extends ServiceProvider {
  /**
   * Register method called by the Ioc container
   * to register the provider
   *
   * @method register
   *
   * @return {void}
   */
  * register() {
    this.app.singleton('Lesswork/Hashids', function (app) {
      const Hash = require('../src/');
      const key = env('APP_KEY');

      if (!key) {
        throw `Missing 'APP_KEY' in your '.env.js' file.`;
      }

      return new Hash(key);
    });
  }
}

module.exports = HashProvider;