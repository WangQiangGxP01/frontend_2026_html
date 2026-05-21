import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { logout } from "../utils/auth.js";

export function Dashboard() {
  const user = useLoaderData();

  return (
    <section className="page-section">
      <div className="teacher-header">
        <div>
          <p className="eyebrow">Protected route</p>
          <h2>先生用ダッシュボード</h2>
          <p>{user} さん、授業用メモを確認できます。</p>
        </div>
        <Link className="secondary-button" to="/" onClick={logout}>ログアウト</Link>
      </div>

      <nav className="sub-nav" aria-label="先生用メニュー">
        <NavLink to="/dashboard" end>概要</NavLink>
        <NavLink to="/dashboard/notes">授業メモ</NavLink>
      </nav>

      <Outlet />
    </section>
  );
}

export function DashboardHome() {
  return (
    <div className="dashboard-panel">
      <h3>今日の進め方</h3>
      <p>
        学生にはまず URL を声に出して読んでもらい、次に画面がどのコンポーネントから
        作られているかをペアで説明してもらいます。
      </p>
    </div>
  );
}

export function DashboardNotes() {
  return (
    <div className="dashboard-panel">
      <h3>講師メモ</h3>
      <ul className="check-list">
        <li>Link と a タグの違いをブラウザの再読み込みで比較する</li>
        <li>Outlet の位置を一度消して、子ルートが出ないことを確認する</li>
        <li>存在しない URL を入力して errorElement の意味を話す</li>
      </ul>
    </div>
  );
}
