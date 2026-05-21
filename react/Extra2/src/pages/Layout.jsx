import { NavLink, Outlet, useNavigation } from "react-router-dom";

export function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state !== "idle";

  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">React Router v6 / 日本語教材</p>
          <h1>ルートで考える React アプリ</h1>
        </div>
        <nav className="top-nav" aria-label="メインナビゲーション">
          <NavLink to="/" end>ホーム</NavLink>
          <NavLink to="/lessons">レッスン</NavLink>
          <NavLink to="/products">教材一覧</NavLink>
          <NavLink to="/dashboard">先生用</NavLink>
        </nav>
      </header>

      {isLoading && <div className="loading-bar" aria-label="読み込み中" />}

      <main>
        <Outlet />
      </main>
    </div>
  );
}
