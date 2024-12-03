function parseInput(input: string): number[][] {
  return input
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));
}

export function solve(input: string): number {
  const reports = parseInput(input);
  return 2;
}

export function solveTwo(input: string): number {
  const reports = parseInput(input);
  return 1;
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input");
  console.log("Problem one:", solve(input));
  // console.log("Problem two:", solveTwo(input));
}
