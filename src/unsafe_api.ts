export function unsafe_cast<T, U>(x: T): U {
  return JSON.parse(JSON.stringify(x));
}

const x: number = unsafe_cast("aaa");
