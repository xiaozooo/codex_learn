import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { LearningSectionCard } from "../components/LearningSectionCard";
import { learningSections } from "../data/content";

export function HomePage() {
  return (
    <>
      <Hero />
      <section className="module-strip" id="modules">
        {learningSections.map((section) => (
          <a key={section.id} className="module-pill" href={`#${section.id}`}>
            <span>{section.title}</span>
            <small>{section.items.length} 个重点</small>
          </a>
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
          <p>用一轮小测确认你是否已经掌握环境探索、任务表达、测试驱动和部署思路。</p>
        </div>
        <Link className="button button-primary" to="/quiz">
          开始小测
        </Link>
      </section>
    </>
  );
}
