export const lessons = [
  {
    id: "01-spa",
    title: "BrowserRouter, Routes, Route, Link",
    goal: "React Router の基本部品を使って、URL と画面コンポーネントを対応させる。",
    points: [
      "URL はアプリの状態を表す",
      "Link はページ全体を再読み込みしない",
      "Route は URL と表示コンポーネントの対応表"
    ],
    challenge: "ナビゲーションに新しい Link を追加して、ページ全体が再読み込みされないことを確認しよう。"
  },
  {
    id: "02-nested",
    title: "Layout Route と Outlet",
    goal: "共通レイアウトの中に子ページを差し込む Outlet の役割を説明できるようになる。",
    points: [
      "親ルートは共通の枠を担当する",
      "Outlet の場所に子ルートが表示される",
      "Index route は親 URL ぴったりの初期画面"
    ],
    challenge: "ダッシュボード配下に新しい子ページを 1 つ追加して、Outlet に表示してみよう。"
  },
  {
    id: "03-params",
    title: "Dynamic Route と URL Params",
    goal: "/products/:productId のような動的 URL から値を取り出せるようになる。",
    points: [
      ":productId は URL の一部を変数として扱う",
      "loader の params で詳細データを選べる",
      "見つからない ID は 404 やエラー画面に流す"
    ],
    challenge: "存在しない商品 ID に直接アクセスして、エラー表示を確認しよう。"
  },
  {
    id: "04-search",
    title: "Search Params と Link State",
    goal: "?category=basic のような URL クエリで一覧をフィルターし、戻る動きも自然にする。",
    points: [
      "useSearchParams で URL クエリを読む",
      "フィルター状態を URL に残すと共有しやすい",
      "Link の to に検索条件を含められる"
    ],
    challenge: "新しいカテゴリを data.js に追加し、フィルターボタンも増やしてみよう。"
  },
  {
    id: "05-loader-action",
    title: "Loader, Error, Action, Protected Route",
    goal: "表示前のデータ取得、エラー表示、フォーム送信、ログイン必須ページをまとめて理解する。",
    points: [
      "loader は画面表示前に必要なデータを準備する",
      "action は Form の送信を受け取る",
      "useNavigation で送信中や移動中の状態を表示できる"
    ],
    challenge: "ログインフォームのエラー表示と、未ログイン時のリダイレクトを URL を見ながら説明しよう。"
  }
];

export const products = [
  {
    id: "router-map",
    name: "Router Map",
    category: "basic",
    price: 1200,
    description: "Route, path, element の対応をカードで練習する教材です。"
  },
  {
    id: "nested-town",
    name: "Nested Town",
    category: "layout",
    price: 1800,
    description: "Outlet とレイアウトルートを小さな町の地図で理解する教材です。"
  },
  {
    id: "param-passport",
    name: "Param Passport",
    category: "dynamic",
    price: 1500,
    description: "URL パラメータを使って詳細ページを切り替える練習セットです。"
  },
  {
    id: "loader-lab",
    name: "Loader Lab",
    category: "data",
    price: 2200,
    description: "loader, action, Form, redirect の流れを確認する実験教材です。"
  }
];

export function getLesson(id) {
  return lessons.find((lesson) => lesson.id === id);
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
