class Holder<T> {
  value: T | null;
  constructor(x: T) {
    this.value = x;
  }
  get x(): T {
    const inject = () => {
      this.value = null;
    };
    if (this.value !== null) {
      inject();
      return this.value;
    }
    throw "not_reach_here";
  }
}

export function inject_null<T>(x: T): T {
  const holder = new Holder(x);
  return holder.x;
}

const x: number = inject_null(10);
