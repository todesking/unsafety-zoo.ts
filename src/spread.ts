function aux<T, U, V extends { x: U }>(v: V, t: T): { x: T & U } {
  return { ...v, x: t };
}

export function instead<T, U>(t: T, u: U): U {
  const a: { x: T & U } = aux<T, U, { x: U }>({ x: u }, t);
  return a.x;
}

const x: number = instead("123", 123);
