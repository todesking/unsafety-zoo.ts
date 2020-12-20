/* eslint @typescript-eslint/ban-ts-comment: "off" */
export function unsafe_cast<T, U>(x: T): U {
  // @ts-ignore
  return x;
}

const x: number = unsafe_cast("aaa");
