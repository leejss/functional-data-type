// export interface Left<L, R> {
//   readonly value: L;
//   readonly _tag: "Left";
// }
// export interface Right<L, R> {
//   readonly value: R;
//   readonly _tag: "Right";
// }

export class Left<L, R> {
  readonly value: L;
  readonly _tag: "Left" = "Left";
  constructor(value: L) {
    this.value = value;
  }
}

export class Right<L, R> {
  readonly value: R;
  readonly _tag: "Right" = "Right";
  constructor(value: R) {
    this.value = value;
  }
}

export type Either<R, L = never> = Left<L, R> | Right<L, R>;

export const left = <L>(left: L): Either<never, L> => {
  // return { value: left, _tag: "Left" };
  return new Left(left);
};
export const right = <R>(right: R): Either<R> => {
  // return { value: right, _tag: "Right" };
  return new Right(right);
};
export const isLeft = <R, L>(either: Either<R, L>): either is Left<L, R> => {
  return either._tag === "Left";
};
export const isRight = <R, L>(either: Either<R, L>): either is Right<L, R> => {
  return either._tag === "Right";
};
