import { readLines, readSource } from "../../lib/source/readcurrentsource";
import { Submarine } from "./Submarine";
import { DirectionAndValue, OnGoDirection } from "./types";

const onGoDown: OnGoDirection = (sub, num) => {
  sub.aim += num;
};

const onGoUp: OnGoDirection = (sub, num) => {
  sub.aim -= num;
};

const onGoForward: OnGoDirection = (sub, num) => {
  sub.horizontal += num;
  sub.depth += sub.aim * num;
};

export default function secondPart() {
  const source = readSource();
  const lines = readLines(source);
  const subMarine = new Submarine(onGoUp, onGoDown, onGoForward);
  subMarine.readDirections(lines as DirectionAndValue[]);
  const result = subMarine.depthByPosition();
  console.log(`Final result : ${result}`);
}
