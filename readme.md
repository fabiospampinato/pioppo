# Pioppo

A tiny isomorphic batched logger. ~3x faster than regular logging in Node.

## Install

```sh
npm install pioppo
```

## Usage

```ts
import Pioppo from 'pioppo';

// Creating a Pioppo instance

const pioppo = new Pioppo ({
  transports: [console]
});

// Logging some messages

pioppo.debug ( 'Some message' );
pioppo.info ( 'Some message' );
pioppo.warn ( 'Some message' );
pioppo.error ( 'Some message' );

// Flushing messages immediately

pioppo.flush ();
```

## License

MIT © Fabio Spampinato
