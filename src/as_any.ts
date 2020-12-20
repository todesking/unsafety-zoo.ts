/* eslint @typescript-eslint/no-explicit-any: "off" */

export function unsafe_cast<T, U>(x: T): U {
  return x as any
}

const x: number = unsafe_cast("abc")
