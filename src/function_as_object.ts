function aux<T, U>(x: { value: T }): { value: U } {
  if (typeof x === "function") {
    // x: never
    return x;
  }
  throw "not_reach_here";
}

export function unsafe_cast<T, U>(x: T): U {
  const f = () => {};
  f.value = x;
  return aux<T, U>(f).value;
}

const x: number = unsafe_cast("aaa");
