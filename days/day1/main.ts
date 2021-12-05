import { label, result } from "../../lib/label";
import { readLines, readSource } from "../../lib/source/readcurrentsource";

function getIncreasingNumbers(lines: string[]): number {
  let total = 0;
  let previous = "";

  function checkLine(line: string): void {
    if (line > previous) total += 1;
    previous = line;
  }

  for (const line of lines) {
    checkLine(line);
  }
  return total;
}

function firstPart() {
  const source = readSource();
  const lines = readLines(source);
  const increasingNumbers = getIncreasingNumbers(lines);
  console.log(`Total = ${increasingNumbers}`);
}

function secondPart() {
  const source = readSource();
  const lines = readLines(source);
  const final_result = compareByThreeWindows(lines);
  result(final_result);
}

function convertInThreeWindows<T>(current: T, i: number, arr: T[]): string {
  const previous = Number(arr[i - 1]);
  const next = Number(arr[i + 1]) ?? 0;
  return String(Number(current) + previous + next);
}

function compareByThreeWindows(stringList: string[]) {
  const byThreeWindows = stringList.map(convertInThreeWindows);
  return getIncreasingNumbers(byThreeWindows);
}

function main() {
  label("FirstPart", firstPart);
  label("SecondPart", secondPart);
}

main();
