export function unsafe_cast<T, U>(x: T): U {
  const a1: U[] = [];
  const a2: unknown[] = a1;
  a2.push(x);

  // deal with noUncheckedIndexedAccess
  const y = a1[0];
  if (y !== undefined) return y;

  throw "not_reach_here";
}

const x: number = unsafe_cast("aaa");
