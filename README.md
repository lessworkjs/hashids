# lesswork-hashids
This is a hashids provider for the `lesswork-framework`.

# Installation
```bash 
npm i --save @lessworkjs/hashids
```

Register the provider and alias in your `config/app.js` file.

```js
const providers = [
  ...
  '@lessworkjs/hashids/providers/HashProvider',
];

const aliases = {
  ...
  Hashids: 'Lesswork/Hashids',
};
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