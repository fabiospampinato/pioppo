
/* MAIN */

type Options = {
  scheduler?: Scheduler,
  transports?: Transport[]
};

type Scheduler = {
  ( callback: () => void ): void
};

type Transport = {
  error: ( message: string ) => void,
  warn: ( message: string ) => void,
  info: ( message: string ) => void,
  debug: ( message: string ) => void
};

/* EXPORT */

export type {Options, Scheduler, Transport};
