import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Codex Crash Course</p>
        <h1>Codex 学习速成</h1>
        <p className="hero-text">
          用一页内容掌握 Codex 的核心使用方式：先懂命令，再学提问和协作，最后用一轮小测把关键概念真正记住。
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#modules">
            进入学习
          </a>
          <Link className="button button-secondary" to="/quiz">
            开始小测
          </Link>
        </div>
      </div>
      <div className="hero-panel" aria-hidden="true">
        <div className="terminal-card">
          <span className="terminal-line prompt">$ codex inspect</span>
          <span className="terminal-line">读取项目结构与上下文</span>
          <span className="terminal-line prompt">$ codex test</span>
          <span className="terminal-line">先让失败暴露真实缺口</span>
          <span className="terminal-line prompt">$ codex ship</span>
          <span className="terminal-line">通过 Actions 自动部署到 Pages</span>
        </div>
      </div>
    </section>
  );
}
