import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { QuizPage } from "./pages/QuizPage";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-shell">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<QuizPage />} path="/quiz" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
