// https://github.com/microsoft/TypeScript/issues/13043
export function unsafe_cast<T, U>(t: T): U {
  const dummy: () => never = () => {
    throw "!!!";
  };
  const f1 = (x: U = dummy()) => x;
  const f2: () => U = f1;
  const f3: (x: T) => U = f2;
  return f3(t);
}

const x: number = unsafe_cast("aaa");
