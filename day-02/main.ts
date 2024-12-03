function parseInput(input: string): number[][] {
  return input
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));
}

function checkSafe(levelA: number, levelB: number, increasing: boolean) {
  const delta = Math.abs(levelA - levelB);
  return (
    (increasing ? levelA < levelB : levelA > levelB) && delta <= 3 && delta > 0
  );
}

function checkReport(report: number[], dampener: boolean): boolean {
  const increasing = report[0] < report[1];
  let reportSafe = true;
  for (let i = 1; i < report.length; i++) {
    const levelA = report[i - 1];
    let levelB = report[i];
    reportSafe = checkSafe(levelA, levelB, increasing);
    if (!reportSafe) {
      break;
    }
  }
  // Check if removing any one value will make the report valid
  if (!reportSafe && dampener)
    for (let i = 0; i < report.length; i++) {
      let reportWithoutItem = report.filter((v, j) => j !== i);
      reportSafe = checkReport(reportWithoutItem, false);
      if (reportSafe) {
        break;
      }
    }
  return reportSafe;
}

export function solve(input: string): number {
  const reports = parseInput(input);
  const validReports = reports.filter((report) => checkReport(report, false));
  return validReports.length;
}

export function solveTwo(input: string): number {
  const reports = parseInput(input);
  const validReports = reports.filter((report, i) => checkReport(report, true));
  return validReports.length;
}

if (import.meta.main) {
  const input = Deno.readTextFileSync("input");
  console.log("Problem one:", solve(input));
  console.log("Problem two:", solveTwo(input));
}
