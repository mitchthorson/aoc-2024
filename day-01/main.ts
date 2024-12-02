function parseInput(input: string): [number[], number[]] {
  const listA: number[] = [];
  const listB: number[] = [];
  const lines = input.split("\n");
  for (const line of lines) {
    const [a, b] = line.split("   ");
    if (!a || !b) {
      continue;
    }
    listA.push(parseInt(a));
    listB.push(parseInt(b));
  }
  listA.sort((a, b) => a - b);
  listB.sort((a, b) => a - b);
  return [listA, listB];
}

function getCounts(input: number[]): Map<number, number> {
  const counts: Map<number, number> = new Map();
  for (const num of input) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }
  return counts;
}

export function solve(input: string): number {
  const [listA, listB] = parseInput(input);
  const diffs = listA.map((a, i) => {
    const b = listB[i];
    return Math.abs(a - b);
  });
  return diffs.reduce((acc, curr) => acc + curr, 0);
}

export function solveTwo(input: string): number {
  const [listA, listB] = parseInput(input);
  const counts = getCounts(listB);
  const vals = listA.map((a) => a * (counts.get(a) || 0));
  return vals.reduce((acc, curr) => acc + curr, 0);
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input");
  console.log("Problem one:", solve(input));
  console.log("Problem two:", solveTwo(input));
}
