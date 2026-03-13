import { describe, expect, it } from "vitest";
import { quizQuestions } from "../data/quiz";
import { calculateScore } from "./quiz";

describe("calculateScore", () => {
  it("counts only correct answers", () => {
    const score = calculateScore(quizQuestions, { q1: 0 });

    expect(score).toBe(1);
  });

  it("treats unanswered questions as incorrect", () => {
    const score = calculateScore(quizQuestions, {});

    expect(score).toBe(0);
  });
});
