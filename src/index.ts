
/* IMPORT */

import whenExit from 'when-exit';
import scheduler from './scheduler';
import type {Callback, Options, Scheduler, Transport} from './types';

/* MAIN */

class Pioppo {

  /* VARIABLES */

  private errors: string[] = [];
  private warns: string[] = [];
  private infos: string[] = [];
  private debugs: string[] = [];

  private scheduled?: boolean;
  private schedulerCb?: Callback;

  private scheduler: Scheduler;
  private transports: Transport[];

  /* CONSTRUCTOR */

  constructor ( options: Options = {} ) {

    this.scheduled = false;
    this.scheduler = options.scheduler || scheduler;
    this.transports = options.transports || [console];

    whenExit ( this.flush.bind ( this ) );

  }

  /* LOGGING API */

  error ( message: string ): void {

    this.errors.push ( message );

    this.schedule ();

  }

  warn ( message: string ): void {

    this.warns.push ( message );

    this.schedule ();

  }

  info ( message: string ): void {

    this.infos.push ( message );

    this.schedule ();

  }

  debug ( message: string ): void {

    this.debugs.push ( message );

    this.schedule ();

  }

  /* SCHEDULING API */

  flush (): void {

    const errors = this.errors.length ? this.errors.join ( '\n' ) : undefined;
    const warns = this.warns.length ? this.warns.join ( '\n' ) : undefined;
    const infos = this.infos.length ? this.infos.join ( '\n' ) : undefined;
    const debugs = this.debugs.length ? this.debugs.join ( '\n' ) : undefined;

    if ( errors ) this.errors = [];
    if ( warns ) this.warns = [];
    if ( infos ) this.infos = [];
    if ( debugs ) this.debugs = [];

    for ( let i = 0, l = this.transports.length; i < l; i++ ) {

      const transport = this.transports[i];

      if ( errors ) transport.error ( errors );
      if ( warns ) transport.warn ( warns );
      if ( infos ) transport.info ( infos );
      if ( debugs ) transport.debug ( debugs );

    }

  }

  schedule (): void {

    if ( this.scheduled ) {

      this.schedulerCb?.();

    } else {

      this.scheduled = true;

      this.schedulerCb = this.scheduler ( () => {

        this.scheduled = false;

        this.flush ();

      });

    }

  }

}

/* EXPORT */

export default Pioppo;
