import { Link } from "react-router-dom";

type HeroProps = {
  onEnterStudy: () => void;
};

export function Hero({ onEnterStudy }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Codex Crash Course</p>
        <h1>Codex 学习速成</h1>
        <p className="hero-text">
          先把 Codex CLI 的顶层命令、全局选项和 MCP 子命令系统过一遍，再用随机测验检查你是否真的记住了关键功能。
        </p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={onEnterStudy} type="button">
            进入学习
          </button>
          <Link className="button button-secondary" to="/quiz">
            开始小测
          </Link>
        </div>
      </div>
      <div className="hero-panel" aria-hidden="true">
        <div className="terminal-card">
          <span className="terminal-line prompt">$ codex inspect</span>
          <span className="terminal-line">查看全部主命令和启动选项</span>
          <span className="terminal-line prompt">$ codex mcp list</span>
          <span className="terminal-line">核对已接入的 MCP 服务</span>
          <span className="terminal-line prompt">$ codex exec</span>
          <span className="terminal-line">把命令理解转成可执行任务</span>
        </div>
      </div>
    </section>
  );
}
