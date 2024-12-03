export function solve(input: string): number {
  const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = Array.from(input.matchAll(pattern));
  const result = matches
    .map(([_, a, b]) => {
      return Number(a) * Number(b);
    })
    .reduce((acc, val) => acc + val, 0);
  return result;
}

export function solveTwo(input: string): number {
  const pattern = /mul\((\d{1,3}),(\d{1,3})\)|(do\(\))|(don\'t\(\))/g;
  const matches = Array.from(input.matchAll(pattern));
  const instructions = matches.map(([instruction, a, b]) => {
    if (instruction.includes("mul")) {
      return Number(a) * Number(b);
    }
    return instruction;
  });
  let result = 0;
  let enabled = true;
  instructions.forEach((instruction) => {
    switch (instruction) {
      case "do()":
        enabled = true;
        break;
      case "don't()":
        enabled = false;
        break;
      default:
        if (enabled && typeof instruction === "number") {
          result += instruction;
        }
    }
  });
  return result;
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input");
  console.log("Problem one:", solve(input));
  console.log("Problem two:", solveTwo(input));
}
