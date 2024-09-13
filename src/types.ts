
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

type Transport = (
  TransportSingle |
  TransportMultiple
);

type TransportSingle = {
  ( message: string ): void
};

type TransportMultiple = {
  error: TransportSingle,
  warn: TransportSingle,
  info: TransportSingle,
  debug: TransportSingle
};

/* EXPORT */

export type {Callback, Options, Scheduler, Transport, TransportSingle, TransportMultiple};
