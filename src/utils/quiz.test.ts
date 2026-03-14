import { describe, expect, it } from "vitest";
import { quizQuestions } from "../data/quiz";
import { calculateScore, pickRandomQuestions } from "./quiz";

describe("calculateScore", () => {
  it("counts only correct answers", () => {
    const [firstQuestion] = quizQuestions;
    const score = calculateScore([firstQuestion], {
      [firstQuestion.id]: firstQuestion.correctAnswer,
    });

    expect(score).toBe(1);
  });

  it("treats unanswered questions as incorrect", () => {
    const score = calculateScore(quizQuestions, {});

    expect(score).toBe(0);
  });
});

describe("pickRandomQuestions", () => {
  it("builds a 100-question bank", () => {
    expect(quizQuestions).toHaveLength(100);
  });

  it("returns five unique questions for one quiz session", () => {
    const selected = pickRandomQuestions(quizQuestions, 5, () => 0.12);

    expect(selected).toHaveLength(5);
    expect(new Set(selected.map((question) => question.id)).size).toBe(5);
  });
});
