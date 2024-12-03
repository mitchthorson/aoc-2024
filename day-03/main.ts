export function solve(input: string): number {
  const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = Array.from(input.matchAll(pattern));
  const result = matches
    .map(([_, a, b, ...rest]) => {
      return Number(a) * Number(b);
    })
    .reduce((acc, val) => acc + val, 0);
  return result;
}

export function solveTwo(input: string): number {
  return 1;
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input");
  console.log("Problem one:", solve(input));
  // console.log("Problem two:", solveTwo(input));
}
