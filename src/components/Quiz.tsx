import { useState } from "react";
import { quizQuestions } from "../data/quiz";
import { calculateScore } from "../utils/quiz";

export function Quiz() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? calculateScore(quizQuestions, answers) : 0;

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
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <section className="quiz-shell">
      <div className="quiz-intro">
        <p className="eyebrow">Quick Check</p>
        <h1>Codex 小测验</h1>
        <p>
          8 道单选题，覆盖探索环境、提问方式、TDD、验证与 GitHub Pages 部署等首版核心概念。
        </p>
      </div>

      <div className="quiz-list">
        {quizQuestions.map((question, index) => (
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
                {score} / {quizQuestions.length}
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
