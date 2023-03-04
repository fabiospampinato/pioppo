
/* IMPORT */

import type {Scheduler} from './types';

/* MAIN */

//TODO: Maybe make this more sophisticated

const scheduler: Scheduler = fn => {

  setTimeout ( fn, 1000 );

};

/* EXPORT */

export default scheduler;
