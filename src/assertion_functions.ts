function lie<T>(x: unknown): asserts x is T{
}


export function unsafe_cast<T, U>(x: T): U {
  lie<U>(x)
  return x
}

const x: number = unsafe_cast("string")
