export function solve(input: string): number {
  const [rules, updates] = input.trim().split("\n\n");
  return updates
    .split("\n")
    .filter((update: string) => {
      const updateList = update.split(",");
      for (let i = 0; i < updateList.length; i++) {
        const item = updateList[i];
        const rulesToCheck = rules
          .split("\n")
          .filter((rule) => {
            return rule.split("|")[0] === item;
          })
          .map((rule) => rule.split("|")[1]);
        for (const rule of rulesToCheck) {
          for (let j = 0; j < i; j++) {
            if (updateList[j] == rule) {
              return false;
            }
          }
        }
      }
      return true;
    })
    .map((update) => update.split(","))
    .map((update) => update[Math.floor(update.length / 2)])
    .reduce((acc, val) => acc + parseInt(val), 0);
}

export function solveTwo(input: string): number {
  const [rules, updates] = input.trim().split("\n\n");
  const results: string[][] = [];
  const updatesList = updates.split("\n");
  for (const update of updatesList) {
    const updateList = update.split(",");
    let isInfraction = false;
    for (let i = 0; i < updateList.length; i++) {
      const item = updateList[i];
      // this might move
      let itemIndex = i;
      const rulesToCheck = rules
        .split("\n")
        .filter((rule) => {
          return rule.split("|")[0] === item;
        })
        .map((rule) => rule.split("|"));
      for (let j = 0; j < i; j++) {
        for (const rule of rulesToCheck) {
          if (updateList[j] == rule[1]) {
            isInfraction = true;
            // make sure the item moves to the lowest index required by all rules
            itemIndex = Math.min(itemIndex, j);
          }
        }
      }
      // now that all rules have been checked, move the item to the correct index
      if (itemIndex !== i) {
        updateList.splice(i, 1);
        updateList.splice(itemIndex, 0, item);
      }
    }
    if (isInfraction) {
      results.push(updateList);
    }
  }
  return results
    .map((update) => update[Math.floor(update.length / 2)])
    .reduce((acc, val) => acc + parseInt(val), 0);
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input");
  console.log("Problem one:", solve(input));
  console.log("Problem two:", solveTwo(input));
}
