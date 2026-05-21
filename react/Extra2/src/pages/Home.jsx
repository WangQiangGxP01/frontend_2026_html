import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Scrimba 型の手を動かす授業</p>
        <h2>URL を見ながら、React Router の考え方を体で覚える</h2>
        <p>
          この教材は、React Router を初めて学ぶ学生向けの小さな練習アプリです。
          画面を触りながら、Link、Route、Outlet、URL パラメータ、検索パラメータ、
          loader、action、保護されたルートを順番に確認できます。
        </p>
        <div className="button-row">
          <Link className="primary-button" to="/lessons">レッスンを始める</Link>
          <Link className="secondary-button" to="/products?category=basic">教材一覧を見る</Link>
        </div>
      </div>

      <div className="route-board" aria-label="ルート例">
        <div>
          <span>/</span>
          <strong>Home</strong>
        </div>
        <div>
          <span>/lessons/:lessonId</span>
          <strong>URL パラメータ</strong>
        </div>
        <div>
          <span>/products?category=data</span>
          <strong>検索パラメータ</strong>
        </div>
        <div>
          <span>/dashboard</span>
          <strong>保護されたルート</strong>
        </div>
      </div>
    </section>
  );
}
