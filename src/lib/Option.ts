export class None<A> {
  readonly _tag: "None" = "None";
}

export class Some<A> {
  readonly value: A;
  readonly _tag: "Some" = "Some";
  constructor(value: A) {
    this.value = value;
  }
}

export type Option<A> = None<A> | Some<A>;

// Constructors
export const none = <A>(): Option<A> => {
  return new None();
};

export const some = <A>(value: A): Option<A> => {
  return new Some(value);
};

// Guards
export const isNone = <A>(option: Option<A>): option is None<A> => {
  return option._tag === "None";
};
export const isSome = <A>(option: Option<A>): option is Some<A> => {
  return option._tag === "Some";
};
