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

function isCross(grid: string[][], x: number, y: number): number {
  // grab the dimensions of the input grid
  const inputWidth = grid[0].length;
  const inputHeight = grid.length;
  // check if the current cell has space to be a cross, and if the current cell is an "A"
  if (
    x < 1 ||
    x >= inputWidth - 1 ||
    y < 1 ||
    y >= inputHeight - 1 ||
    grid[y][x] !== "A"
  ) {
    return 0;
  }

  const nw = grid[y - 1][x - 1];
  const ne = grid[y - 1][x + 1];
  const se = grid[y + 1][x + 1];
  const sw = grid[y + 1][x - 1];

  if (
    ((nw === "M" && se === "S") || (nw === "S" && se === "M")) &&
    ((ne === "M" && sw === "S") || (ne === "S" && sw === "M"))
  ) {
    return 1;
  }

  return 0;
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
  const grid = input.split("\n").map((line) => line.split(""));
  let crosses = 0;
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      crosses += isCross(grid, x, y);
    }
  }
  return crosses;
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input");
  console.log("Problem one:", solve(input));
  console.log("Problem two:", solveTwo(input));
}
