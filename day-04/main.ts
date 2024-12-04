function countMatches(input: string[][], x: number, y: number): number {
  // the word we're searching for
  const wordToMatch = "XMAS";
  // grab the dimensions of the input grid
  const inputWidth = input[0].length;
  const inputHeight = input.length;

  // initialize boolean flags for each direction
  let searchUp = y >= wordToMatch.length - 1;
  let searchRight = x <= inputWidth - wordToMatch.length;
  let searchDown = y <= inputHeight - wordToMatch.length;
  let searchLeft = x >= wordToMatch.length - 1;
  let searchUpRight = searchUp && searchRight;
  let searchDownRight = searchDown && searchRight;
  let searchDownLeft = searchDown && searchLeft;
  let searchUpLeft = searchUp && searchLeft;
  let matchCount = 0;

  for (let i = 0; i < wordToMatch.length; i += 1) {
    const letter = wordToMatch[i];
    if (searchUp) {
      searchUp = input[y - i][x] === letter;
    }
    if (searchUpRight) {
      searchUpRight = input[y - i][x + i] === letter;
    }
    if (searchRight) {
      searchRight = input[y][x + i] === letter;
    }
    if (searchDownRight) {
      searchDownRight = input[y + i][x + i] === letter;
    }
    if (searchDown) {
      searchDown = input[y + i][x] === letter;
    }
    if (searchDownLeft) {
      searchDownLeft = input[y + i][x - i] === letter;
    }
    if (searchLeft) {
      searchLeft = input[y][x - i] === letter;
    }
    if (searchUpLeft) {
      searchUpLeft = input[y - i][x - i] === letter;
    }
    if (i === wordToMatch.length - 1) {
      let results = [
        searchUp,
        searchUpRight,
        searchRight,
        searchDownRight,
        searchDown,
        searchDownLeft,
        searchLeft,
        searchUpLeft,
      ];
      matchCount = results.filter((result) => result).length;
    }
  }
  return matchCount;
}
export function solve(input: string): number {
  const grid = input.split("\n").map((line) => line.split(""));
  let matches = 0;
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      matches += countMatches(grid, x, y);
    }
  }
  return matches;
}

export function solveTwo(input: string): number {
  return 2;
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input");
  console.log("Problem one:", solve(input));
  console.log("Problem two:", solveTwo(input));
}
