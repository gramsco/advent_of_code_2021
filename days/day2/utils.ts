import { DirectionAndValue } from "./types";

export function parseDirection(
  directionAndValue: DirectionAndValue
): [string, number] {
  const [direction, value] = directionAndValue.split(" ");
  return [direction, +value];
}
