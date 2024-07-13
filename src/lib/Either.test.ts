import { describe, expect, it } from "bun:test";
import { Either } from ".";

describe("Either test", () => {
  it("should be left", () => {
    const left = Either.left("error");

    expect(left.value).toBe("error");
    expect(Either.isLeft(left)).toBe(true);
  });

  it("should be right", () => {
    const right = Either.right(1);

    expect(right.value).toBe(1);
    expect(Either.isRight(right)).toBe(true);
  });
});
