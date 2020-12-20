class A<T> {
  value: T | null = null;
  set(x: T) {
    this.value = x;
  }
}

export function unsafe_cast<T, U>(x: T): U {
  const a1: A<U> = new A();
  const a2: A<unknown> = a1;
  a2.set(x);
  if (a1.value !== null) return a1.value;
  throw "not_reach_here";
}

const x: number = unsafe_cast("aaa");
