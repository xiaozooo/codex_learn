import { Link } from "react-router-dom";
import { Quiz } from "../components/Quiz";

export function QuizPage() {
  return (
    <>
      <div className="page-intro">
        <Link className="inline-link" to="/">
          返回学习地图
        </Link>
      </div>
      <Quiz />
    </>
  );
}
