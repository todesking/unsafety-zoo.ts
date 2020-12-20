/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */
/* eslint @typescript-eslint/no-explicit-any: "off" */

export function unsafe_cast<U>(x: any): U {
  return x;
}

const x: number = unsafe_cast("abc");
