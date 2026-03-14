import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { LearningSectionCard } from "../components/LearningSectionCard";
import { learningSections } from "../data/content";

export function HomePage() {
  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <Hero onEnterStudy={() => scrollToSection("command-reference")} />
      <section className="module-strip" id="command-reference">
        <div className="module-strip-header">
          <p className="eyebrow">Command Reference</p>
          <h2>全部 CLI 指令</h2>
          <p>学习内容已经改成命令总表，覆盖 Codex CLI 的顶层命令、全局选项以及 MCP 子命令。</p>
        </div>
        {learningSections.map((section) => (
          <button
            key={section.id}
            className="module-pill"
            onClick={() => scrollToSection(section.id)}
            type="button"
          >
            <span>{section.title}</span>
            <small>{section.items.length} 条指令</small>
          </button>
        ))}
      </section>
      <div className="content-flow">
        {learningSections.map((section) => (
          <LearningSectionCard key={section.id} section={section} />
        ))}
      </div>
      <section className="cta-panel">
        <div>
          <p className="eyebrow">Finish Strong</p>
          <h2>学完立即测一遍</h2>
          <p>系统题库有 100 题，但每次只抽 5 题，适合反复练习并快速检验记忆盲区。</p>
        </div>
        <Link className="button button-primary" to="/quiz">
          开始小测
        </Link>
      </section>
    </>
  );
}
