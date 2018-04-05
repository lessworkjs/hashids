# lesswork-hashids
This is a hashids provider for the [lessworkjs](https://lesswork.io/) and [adonisjs](https://adonisjs.com/) frameworks.

# Installation
```bash 
npm i  @lessworkjs/hashids
```

Register the provider and alias in your `config/app.js` file.

```js
const providers = [
  ...
  '@lessworkjs/hashids/providers/HashProvider',
];

```

# Configuration
By default your key will be `APP_KEY`.

You can adjust the configurations by creating the file `config/hashids.js`
```
'use strict'

module.exports = {
  key: 'secret',
  length: 5,
  alaphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
};
```

# Usage
See [hashids](https://www.npmjs.com/package/hashids) for full usage information.

```js
const Hashids = use('Hashids');

console.log(Hashids.encode(1));
```