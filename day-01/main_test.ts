import { assertEquals } from "@std/assert";
import { solve, solveTwo } from "./main.ts";

Deno.test({
  name: "one",
  fn() {
  const input = Deno.readTextFileSync("input_test");
  const result = solve(input);
  const answer = 11;
  assertEquals(result, answer);
},});

Deno.test({
  name: "two",
  fn() {
  const input = Deno.readTextFileSync("input_test");
  const result = solveTwo(input);
  const answer = 31;
  assertEquals(result, answer);
}, });
