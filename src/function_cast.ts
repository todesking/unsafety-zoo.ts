// https://github.com/microsoft/TypeScript/issues/13043
export function instead<T, U>(t: T, u: U): U {
  const f1 = (x: U = u) => x;
  const f2: () => U = f1;
  const f3: (x: T) => U = f2;
  return f3(t);
}

const x: number = instead("aaa", 123);
