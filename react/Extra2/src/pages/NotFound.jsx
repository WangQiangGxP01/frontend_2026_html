import { Link, useRouteError } from "react-router-dom";

export function NotFound() {
  const error = useRouteError();
  const status = error?.status || 404;

  return (
    <section className="not-found">
      <p className="eyebrow">errorElement / splat route</p>
      <h2>{status}: ページが見つかりません</h2>
      <p>URL、商品 ID、レッスン ID を確認してください。</p>
      <Link className="primary-button" to="/">ホームへ戻る</Link>
    </section>
  );
}
