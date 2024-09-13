
/* IMPORT */

import type {Transport, TransportMultiple} from './types';

/* MAIN */

const isTransportMultiple = ( transport: Transport ): transport is TransportMultiple => {

  return ( 'error' in transport ) && ( 'warn' in transport ) && ( 'info' in transport ) && ( 'debug' in transport );

};

/* EXPORT */

export {isTransportMultiple};
