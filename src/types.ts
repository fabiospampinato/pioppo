
/* MAIN */

type Callback = {
  (): void
};

type Options = {
  scheduler?: Scheduler,
  transports?: Transport[]
};

type Scheduler = {
  ( callback: Callback ): Callback | undefined
};

type Transport = {
  error: ( message: string ) => void,
  warn: ( message: string ) => void,
  info: ( message: string ) => void,
  debug: ( message: string ) => void
};

/* EXPORT */

export type {Callback, Options, Scheduler, Transport};
