type Loadable<T> = DataLoading | DataError | DataLoaded<T>;

class DataLoading {
  readonly loading = true;
  readonly failed = false;
}

class DataError {
  readonly loading = false;
  readonly failed = true;
  constructor(public error: Error) { }
}

class DataLoaded<T>  {
  readonly loading = false;
  readonly failed = false;
  constructor(public data: T) { }
}
interface Album {
  name: string;
  year: number;
  rating: number;
  imageUrl: string;
  band?: Band;
}

interface Band {
  url: string;
  fullUrl?: string;
  name: string;
  bio?: string;
  imageUrl?: string;
  relatedBands?: Band[];
  albums?: Album[];
}

function mapLoadable<T, T1, T2, T3>(
  a: Loadable<T>,
  failedF: T1 | ((_: Error) => T1),
  loadingF: T2 | (() => T2),
  successF: T3 | ((_: T) => T3),
) {
  const callIfFunc =
    function <T4, T5>(f: T4 | ((_: T5) => T4), arg: T5) {
      return typeof f === 'function' ? f(arg) : f;
    };
  return a.failed
    ? callIfFunc(failedF, a.error)
    : a.loading
      ? callIfFunc(loadingF, undefined)
      : callIfFunc(successF, a.data);
}

export {
  Band,
  Album,
  DataLoading,
  Loadable,
  DataLoaded,
  DataError,
  mapLoadable,
};