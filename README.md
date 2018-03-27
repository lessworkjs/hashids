# lesswork-hash
This is a hashids provider for the `lesswork-framework`.

# Installation
```bash 
npm i --save lesswork-hashids
```

Register the provider and alias in your `config/app.js` file.

```js
const providers = [
  ...
  'lesswork-hashids/Providers/HashProvider',
];

const aliases = {
  ...
  Hash: 'Lesswork/Hash',
};
```

# Usage
See [hashids](https://www.npmjs.com/package/hashids) for full usage information.

```js
const Hash = use('Hash');

console.log(Hash.encode(1));
```