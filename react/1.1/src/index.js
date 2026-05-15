import "./styles.css";

/**
 * チャレンジ①：
 * 最初からReactアプリをセットアップしてみましょう！
 * コピペせずに、自分の手でコードを書いてみてください。
 * 今回は「初めてのReact App」と表示するだけのUIをレンダリングしてみてください。
 */
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
  <h1>Hello React</h1>
)