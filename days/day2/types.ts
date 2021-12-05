import { DOWN, FORWARD, UP } from "./consts";
import { Submarine } from "./Submarine";

export type PossibleDirection = typeof UP | typeof DOWN | typeof FORWARD;

export type DirectionAndValue = `${PossibleDirection} ${number}`;

export type OnGoDirection = (sub: Submarine, num: number) => void;
