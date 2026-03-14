import { useState } from "react";
import { quizQuestions } from "../data/quiz";
import { calculateScore, pickRandomQuestions } from "../utils/quiz";

export function Quiz() {
  const [selectedQuestions, setSelectedQuestions] = useState(() =>
    pickRandomQuestions(quizQuestions, 5),
  );
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? calculateScore(selectedQuestions, answers) : 0;

  function handleAnswerChange(questionId: string, optionIndex: number) {
    setAnswers((current) => ({
      ...current,
      [questionId]: optionIndex,
    }));
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleReset() {
    setSelectedQuestions(pickRandomQuestions(quizQuestions, 5));
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <section className="quiz-shell">
      <div className="quiz-intro">
        <p className="eyebrow">Quick Check</p>
        <h1>Codex 小测验</h1>
        <p>
          当前题库共 100 题，每次会随机抽取 5 题。题目覆盖顶层命令、全局选项和 MCP 子命令。
        </p>
      </div>

      <div className="quiz-list">
        {selectedQuestions.map((question, index) => (
          <article key={question.id} className="quiz-card">
            <div className="quiz-card-header">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{question.prompt}</h2>
            </div>

            <div className="option-list" role="radiogroup" aria-label={question.prompt}>
              {question.options.map((option, optionIndex) => (
                <label
                  key={option}
                  className={
                    answers[question.id] === optionIndex ? "option option-selected" : "option"
                  }
                >
                  <input
                    checked={answers[question.id] === optionIndex}
                    disabled={submitted}
                    name={question.id}
                    onChange={() => handleAnswerChange(question.id, optionIndex)}
                    type="radio"
                    value={optionIndex}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            {submitted ? (
              <div className="answer-feedback">
                <p>
                  正确答案：<strong>{question.options[question.correctAnswer]}</strong>
                </p>
                <p>{question.explanation}</p>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <div className="quiz-actions">
        {submitted ? (
          <>
            <div className="result-panel" aria-live="polite">
              <p className="result-label">你的得分</p>
              <strong>
                {score} / {selectedQuestions.length}
              </strong>
            </div>
            <button className="button button-primary" onClick={handleReset} type="button">
              重新测验
            </button>
          </>
        ) : (
          <button className="button button-primary" onClick={handleSubmit} type="button">
            提交答案
          </button>
        )}
      </div>
    </section>
  );
}
