import { DOWN, FORWARD, UP } from "./consts";
import { DirectionAndValue, OnGoDirection, PossibleDirection } from "./types";
import { parseDirection } from "./utils";

export class Submarine {
  horizontal: number;
  depth: number;
  aim: number;
  private onGoUp: OnGoDirection;
  private onGoDown: OnGoDirection;
  private onGoForward: OnGoDirection;
  static depthByPosition: () => number;

  constructor(
    onGoUp: OnGoDirection,
    onGoDown: OnGoDirection,
    onGoForward: OnGoDirection
  ) {
    this.onGoUp = onGoUp;
    this.onGoDown = onGoDown;
    this.onGoForward = onGoForward;
    this.horizontal = 0;
    this.depth = 0;
    this.aim = 0;
  }

  readDirection(str: DirectionAndValue) {
    const [dir, value] = parseDirection(str);
    this.goDirection(dir as PossibleDirection, value);
  }

  readDirections(str: DirectionAndValue[]) {
    for (const direction of str) {
      this.readDirection(direction);
    }
  }

  depthByPosition() {
    return this.horizontal * this.depth;
  }

  private goDirection(direction: PossibleDirection, value: number): void {
    switch (direction) {
      case UP:
        this.onGoUp(this, value);
        break;
      case DOWN:
        this.onGoDown(this, value);
        break;
      case FORWARD:
        this.onGoForward(this, value);
        break;

      default:
        console.log("???");
    }
  }
}
