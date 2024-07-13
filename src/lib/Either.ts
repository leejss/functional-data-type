export interface Left<L, R> {
  readonly value: L;
  readonly _tag: "Left";
}
export interface Right<L, R> {
  readonly value: R;
  readonly _tag: "Right";
}
export type Either<R, L = never> = Left<L, R> | Right<L, R>;

export const left = <L>(left: L): Either<never, L> => {
  return { value: left, _tag: "Left" };
};
export const right = <R>(right: R): Either<R> => {
  return { value: right, _tag: "Right" };
};
export const isLeft = <R, L>(either: Either<R, L>): either is Left<L, R> => {
  return either._tag === "Left";
};
export const isRight = <R, L>(either: Either<R, L>): either is Right<L, R> => {
  return either._tag === "Right";
};
