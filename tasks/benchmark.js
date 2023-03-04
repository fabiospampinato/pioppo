
/* IMPORT */

import Pioppo from '../dist/index.js';

/* HELPERS */

const bench = ( name, fn ) => {
  const start = Date.now ();
  fn ();
  const end = Date.now ();
  const elapsed = end - start;
  const message = `${name}: ${elapsed}ms`;
  setTimeout ( () => {
    console.log ( message );
  }, 100 );
};

/* MAIN */

const pioppo = new Pioppo ();
const message = '[2023-03-04T14:12:56.770Z] GET 200 0ms /';

bench ( 'console', () => {
  for ( let i = 0, l = 10_000; i < l; i++ ) {
    console.error ( message );
    console.warn ( message );
    console.info ( message );
    console.debug ( message );
  }
});

bench ( 'pioppo.queue', () => {
  for ( let i = 0, l = 10_000; i < l; i++ ) {
    pioppo.error ( message );
    pioppo.warn ( message );
    pioppo.info ( message );
    pioppo.debug ( message );
  }
});

bench ( 'pioppo.flush', () => {
  pioppo.flush ();
});
