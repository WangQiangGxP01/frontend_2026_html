import { Link, useLoaderData, useSearchParams } from "react-router-dom";

const filters = [
  { label: "すべて", value: "" },
  { label: "基礎", value: "basic" },
  { label: "レイアウト", value: "layout" },
  { label: "動的 URL", value: "dynamic" },
  { label: "データ取得", value: "data" }
];

export function Products() {
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const visibleProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  function applyFilter(nextCategory) {
    if (!nextCategory) {
      setSearchParams({});
      return;
    }
    setSearchParams({ category: nextCategory });
  }

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">useSearchParams</p>
        <h2>教材一覧</h2>
        <p>カテゴリを選ぶと URL の検索パラメータも変わります。</p>
      </div>

      <div className="filter-row" aria-label="カテゴリフィルター">
        {filters.map((filter) => (
          <button
            className={category === filter.value ? "active" : ""}
            type="button"
            key={filter.value || "all"}
            onClick={() => applyFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <Link
            className="product-card"
            to={`/products/${product.id}`}
            state={{ fromFilter: category }}
            key={product.id}
          >
            <span>{product.category}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>¥{product.price.toLocaleString()}</strong>
          </Link>
        ))}
      </div>
    </section>
  );
}
