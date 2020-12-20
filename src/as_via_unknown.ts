export function unsafe_cast<T, U>(x: T): U {
  return x as unknown as U
}

const x: number = unsafe_cast("string")
