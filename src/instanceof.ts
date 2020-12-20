class A {}
class B {}

export function contaminate<T>(): T {
  const b: B | T = new A();
  if (!(b instanceof B)) {
    return b;
  }
  throw "not_reach_here";
}

const x: number = contaminate();
