function mutate<T, U>(dict: { value: T | U }, x: T | U): void {
  dict.value = x;
}
export function instead<T, U>(x: T, y: U): U {
  const dict = { value: y };
  mutate<T, U>(dict, x);
  return dict.value;
}

const x: number = instead("aaa", 123);
