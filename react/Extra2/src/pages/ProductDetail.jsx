import { Link, useLoaderData, useLocation } from "react-router-dom";

export function ProductDetail() {
  const product = useLoaderData();
  const location = useLocation();
  const fromFilter = location.state?.fromFilter;
  const backTo = fromFilter ? `/products?category=${fromFilter}` : "/products";

  return (
    <article className="detail-layout">
      <Link className="back-link" to={backTo}>← 教材一覧へ戻る</Link>
      <div className="detail-panel">
        <p className="eyebrow">useLoaderData / URL params</p>
        <h2>{product.name}</h2>
        <p className="lead">{product.description}</p>
        <dl className="fact-list">
          <div>
            <dt>商品 ID</dt>
            <dd>{product.id}</dd>
          </div>
          <div>
            <dt>カテゴリ</dt>
            <dd>{product.category}</dd>
          </div>
          <div>
            <dt>価格</dt>
            <dd>¥{product.price.toLocaleString()}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
