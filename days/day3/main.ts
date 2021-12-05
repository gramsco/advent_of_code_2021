import { label, result } from "../../lib/label";
import { readLines, readSource } from "../../lib/source/readcurrentsource";

function analyze(binaryNumbers: string[]) {
  const length = binaryNumbers[0].length;
  const list = new Array(length).fill(0);
  for (const number of binaryNumbers) {
    for (let i = 0; i < number.length; i++) {
      const bit = +number[i];
      list[i] += bit;
    }
  }
  const gamma = list.map((el) => Number(el / binaryNumbers.length > 0.5));
  const epsilon = gamma.map((el) => +!el);
  const gamma_decimal = parseInt(gamma.join(""), 2);
  const epsilon_decimal = parseInt(epsilon.join(""), 2);
  return [gamma_decimal, epsilon_decimal];
}

function firstPart() {
  const source = readSource();
  const lines = readLines(source);
  const [gamma, epsilon] = analyze(lines);
  result(gamma * epsilon);
}

function secondPart(): void {
  console.log("todo");
}

function main() {
  label("Firstpart", firstPart);
  label("SecondPart", secondPart);
}

main();
