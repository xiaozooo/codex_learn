import type { QuizQuestion } from "../data/quiz";

export function calculateScore(
  questions: QuizQuestion[],
  answers: Record<string, number>,
): number {
  return questions.reduce((score, question) => {
    if (answers[question.id] === question.correctAnswer) {
      return score + 1;
    }
    return score;
  }, 0);
}
