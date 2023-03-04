
/* IMPORT */

import {debounce} from 'dettle';
import type {Scheduler} from './types';

/* MAIN */

//TODO: Maybe make this more sophisticated

const scheduler: Scheduler = fn => {

  const dfn = debounce ( fn, 100, { maxWait: 60_000 } );

  dfn ();

  return dfn;

};

/* EXPORT */

export default scheduler;
