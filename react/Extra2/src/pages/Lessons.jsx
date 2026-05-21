import { Link, useLoaderData } from "react-router-dom";

export function Lessons() {
  const lessons = useLoaderData();

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">5 ステップ</p>
        <h2>授業の流れ</h2>
        <p>各カードを開き、説明、コード観察、ミニ課題の順で進めます。</p>
      </div>

      <div className="lesson-grid">
        {lessons.map((lesson, index) => (
          <Link className="lesson-card" to={`/lessons/${lesson.id}`} key={lesson.id}>
            <span>Lesson {index + 1}</span>
            <h3>{lesson.title}</h3>
            <p>{lesson.goal}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
