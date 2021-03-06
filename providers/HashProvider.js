const {
  ServiceProvider,
} = require('@adonisjs/fold');

const Hash = require('../src/');

class HashProvider extends ServiceProvider {
  /**
   * Register method called by the Ioc container
   * to register the provider
   *
   * @method register
   *
   * @return {void}
   */
  register() {
    this.app.singleton('Lesswork/Src/Hashids', (app) => {

      const config = app.use('Config');

      const key = config('hashids.key', config('APP_KEY'));
      const length = config('hashids.length');
      const alaphabet = config('hashids.alaphabet');

      if (!key) {
        throw new Error('Missing \'APP_KEY\' in your \'.env\' file.');
      }

      return new Hash(key, length, alaphabet);
    });

    this.app.alias('Lesswork/Src/Hashids', 'Adonis/Src/Hashids');
    this.app.alias('Lesswork/Src/Hashids', 'Hashids');
  }
}

module.exports = HashProvider;