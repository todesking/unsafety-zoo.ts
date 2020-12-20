export function undefined_as<T>(): T {
  let x!: T;
  return x;
}

const x: number = undefined_as<number>();
