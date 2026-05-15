import "./styles.css";
import recipes from "./data";
import Recipe from "./components/Recipe";
import Header from "./components/Header";

export default function App() {

  const recipesComps = recipes.map(data => <Recipe key={data.id} {...data}></Recipe>)
  return (
    <div className="app-shell">
      <Header />
      <main className="container">
        {recipesComps}
      </main>
    </div>
  );
}

/**
 * チャレンジ1：
 * exampleApp.jsを参考にして、
 * 以上Recipeコンポーネントに、すべてのデータをpropsとして渡してみましょう！
 * 終わったら「5.4 Props③.md」に続く
 */

/**
 * チャレンジ3：
 * 今は <Recipe /> を3つ手動で書いていますが、
 * map() を使ってデータから自動で表示できるようにしましょう。
 *
 * 1. `recipes` 配列を使って、map() を書きましょう。
 * 2. mapの中で、1つ1つのデータを取り出して
 *    <Recipe /> コンポーネントを作りましょう。
 * 3. それぞれの <Recipe /> に、スプレッド構文を使って
 *    データをpropsとして渡しましょう。
 * 4. keyプロパティも忘れずに追加しましょう。
 * 5. 手動で書いている <Recipe /> を削除して、
 *    mapで作ったものだけを表示するようにしましょう。
 *
 * ゴール：
 * データ（recipes）から自動でRecipeコンポーネントが表示されるようにする
 */
