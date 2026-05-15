import curryrice from "../images/curryrice.png";

export default function Recipe(props) {
  return (
    <article className="recipe-entry">
      <div className="recipe-image-container">
        <img src={props.img} alt={props.name} className="recipe-image" />
      </div>

      <div className="recipe-content">
        <div className="recipe-top">
          <span className="recipe-label">料理</span>
        </div>

        <h2 className="recipe-title">{props.name}</h2>
        <p className="recipe-subtitle">
          {props.ingredients}
        </p>
        <p className="recipe-description">
          {props.description}
        </p>
      </div>
    </article>
  );
}

/**
 * チャレンジ2：
 * Recipeコンポーネントの中に直接書かれているデータを、
 * propsから受け取る形に変更しましょう。
 *
 * 1. Recipe関数で `props` を受け取りましょう。
 * 2. 画像のsrcを `curryrice` ではなく、propsから受け取った値に変更しましょう。
 * 3. alt属性もpropsから受け取った料理名を使いましょう。
 * 4. 料理名、材料、説明文もpropsから受け取った値を表示しましょう。
 *
 * ヒント：
 * JSXの中でJavaScriptの値を使うときは `{}` を使います。
 *
 * 例：
 * {props.name}
 *
 * 終わったら「5.6 Array.Map復習.md」へ続く
 *
 */
