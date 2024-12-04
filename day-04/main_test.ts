import { assertEquals } from "@std/assert";
import { solve, solveTwo } from "./main.ts";

Deno.test({
  name: "one",
  fn() {
    const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
    const result = solve(input);
    const answer = 18;
    assertEquals(result, answer);
  },
});

Deno.test({
  name: "two",
  fn() {
    const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
    const result = solveTwo(input);
    const answer = 9;
    assertEquals(result, answer);
  },
});
