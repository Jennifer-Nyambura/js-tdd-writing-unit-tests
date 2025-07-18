// src/__tests__/utils.test.js

import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    expect(pointsForWord("test")).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    expect(pointsForWord("tEsT")).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    expect(pointsForWord("")).toBe(0);
  });

  it("ignores non-alphabetic characters", () => {
    expect(pointsForWord("t3st!")).toBe(6); // Fixed expectation to 6
  });
});
