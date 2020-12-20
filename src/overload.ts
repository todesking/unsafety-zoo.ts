export function unsafe_cast<T, U>(x: T): U;
export function unsafe_cast(x: unknown): unknown {
  return x;
}

const x: number = unsafe_cast("abc");
