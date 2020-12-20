export function unsafe_cast<T, U>(x: T): U {
  const foo: { value: T } | { value: U; lie: true } = { value: x, lie: true };

  if ("lie" in foo) {
    return foo.value;
  }
  throw "not_reach_here";
}

const x: number = unsafe_cast("aaa");
