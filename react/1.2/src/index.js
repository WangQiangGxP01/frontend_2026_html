import { createRoot } from "react-dom/client";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                ホーム
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                メニュー
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    A
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    B
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    C
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                お問い合わせ
              </a>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="検索"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

// ここで書く

root.render(
  <div>
    <Navbar />
  </div>
);

/**
 * チャレンジ1 (2.1-2.3内容を参考)：
 *
 * 初めてのカスタムReactコンポーネントを作成してみましょう！
 * 上のNavbarみたいに、「MainContent」という名前にして、
 * 中身は「これはReactのMainContentコンポーネントです!」と表示するh1要素を返すようにしてください。
 *
 * その後、Navbarの下の行にこのコンポーネントをレンダリングしましょう。
 *
 * 終わったら、「コンポーネント③.md」へ続く
 *
 */

/**
 * チャレンジ2（2.4-2.5の内容を参考）：
 *
 * これまで `index.jsx` に書いていたコンポーネントを、新しいファイルに分けてみましょう。
 *
 * 今回は以下の手順で進めてください。
 * 1. 'src'の中に 'components'フォルダを作成する
 * 2. 'components'フォルダの中に以下の2つのファイルを作成する
 *    - 'Navbar.js'
 *    - 'MainContent.js'
 * 3. この'index.js'の中にある `Navbar` 関数と `MainContent` 関数を、それぞれ対応するファイルに移動する
 * 4. それぞれのファイルで `export default` を使って外に公開する
 * 5. 'scr'フォルダの中に新しく `App.js` を作成する
 * 6. `App.js` の中で `Navbar` と `MainContent` を import して、1つのコンポーネントにまとめる
 * 7. 'index.js' で `App` を import する
 * 8. `root.render()` の中で `<App />` を表示する
 * 9. Webページがもう一度正しく表示されるようにする
 *
 */
