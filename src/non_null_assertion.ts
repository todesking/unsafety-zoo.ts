/* eslint @typescript-eslint/no-non-null-assertion: "off" */

export function null_as<T>(): T {
  const x: T | null = null
  return x!
}

export function undefined_as<T>(): T {
  const x: T | undefined = undefined
  return x!
}

const x1: number = null_as<number>()
const x2: number = undefined_as<number>()
