function lie<T>(x: unknown): x is T {
  return true;
}

export function unsafe_cast<U>(x: unknown): U {
  if (lie<U>(x)) {
    return x;
  }
  throw "not_reach_here";
}

const x: number = unsafe_cast("string");
