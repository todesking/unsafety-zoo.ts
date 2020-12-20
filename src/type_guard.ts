export function inject_null<T>(x: T): T {
  let y: T | null = x;
  function inject() {
    y = null;
  }
  if (y !== null) {
    inject();
    return y;
  }
  throw "not_reach_here";
}

const x: number = inject_null(10);
