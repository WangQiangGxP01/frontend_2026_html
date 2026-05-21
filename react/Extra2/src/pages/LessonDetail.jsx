import { Link, useLoaderData } from "react-router-dom";

export function LessonDetail() {
  const lesson = useLoaderData();

  return (
    <article className="detail-layout">
      <Link className="back-link" to="/lessons">← レッスン一覧へ戻る</Link>
      <div className="detail-panel">
        <p className="eyebrow">今日のテーマ</p>
        <h2>{lesson.title}</h2>
        <p className="lead">{lesson.goal}</p>

        <h3>理解ポイント</h3>
        <ul className="check-list">
          {lesson.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="challenge-box">
          <h3>ミニ課題</h3>
          <p>{lesson.challenge}</p>
        </div>
      </div>
    </article>
  );
}
