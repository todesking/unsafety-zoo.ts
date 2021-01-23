export function unsafe_cast<T, U>(t: T): U {
  try {
    throw t;
  } catch (e) {
    // e: any
    return e;
  }
  throw "not_reach_here";
}

const x: number = unsafe_cast("aaa");
