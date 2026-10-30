export function fib(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}

export function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function sum(xs) {
  return xs.reduce((a, b) => a + b, 0);
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
