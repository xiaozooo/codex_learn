import type { LearningSection } from "../data/content";

type LearningSectionCardProps = {
  section: LearningSection;
};

export function LearningSectionCard({
  section,
}: LearningSectionCardProps) {
  return (
    <section className="section-card" id={section.id}>
      <div className="section-header">
        <p className="section-index">{section.id}</p>
        <h2>{section.title}</h2>
        <p>{section.summary}</p>
      </div>
      <div className="section-grid">
        {section.items.map((item) => (
          <article key={item.title} className="item-card">
            <code className="command-chip">{item.title}</code>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.example ? <code>{item.example}</code> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
