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

export function pickRandomQuestions(
  questions: QuizQuestion[],
  count: number,
  random: () => number = Math.random,
): QuizQuestion[] {
  const pool = [...questions];
  const selection: QuizQuestion[] = [];
  const limit = Math.min(count, pool.length);

  while (selection.length < limit) {
    const index = Math.floor(random() * pool.length);
    const [question] = pool.splice(index, 1);

    selection.push(question);
  }

  return selection;
}
