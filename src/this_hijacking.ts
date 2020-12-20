class A<T> {
  value: T;
  constructor(x: T) {
    this.value = x;
  }
  get_value(): T {
    return this.value;
  }
}

export function instead<T, U>(x: U, y: T): U {
  const a = new A(x);
  const get_value = a.get_value;
  const dict = { get_value, value: y };
  return dict.get_value();
}

const x: number = instead(10, "abc");
