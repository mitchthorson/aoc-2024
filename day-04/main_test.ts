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

// Deno.test({
//   name: "two",
//   fn() {
//     const input =
//       "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
//     const result = solveTwo(input);
//     const answer = 48;
//     assertEquals(result, answer);
//   },
// });
