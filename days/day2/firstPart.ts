import { readLines, readSource } from "../../lib/source/readcurrentsource";
import { Submarine } from "./Submarine";
import { DirectionAndValue, OnGoDirection } from "./types";

const onGoDown: OnGoDirection = (sub, num) => {
  sub.depth += num;
};

const onGoUp: OnGoDirection = (sub, num) => {
  sub.depth -= num;
};

const onGoForward: OnGoDirection = (sub, num) => {
  sub.horizontal += num;
};

export default function firstPart() {
  const source = readSource();
  const lines = readLines(source);
  const subMarine = new Submarine(onGoUp, onGoDown, onGoForward);
  subMarine.readDirections(lines as DirectionAndValue[]);
  const result = subMarine.depthByPosition();
  console.log(`Final result : ${result}`);
}
