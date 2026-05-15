import "./styles.css";
import React, { useState } from "react";

export default function App() {
  /**
   * チャレンジ1：
   * 以下のコードを、ローカル変数ではなく、stateで管理される配列を使うように書き換えてください。
   * stateの配列は、最初は空の配列で初期化しましょう。
   */
  const [myFavoriteFood, setMyFavoriteFood] = useState([]);

  const [allFavoriteFood, setAllFavoriteFood] = useState([
    "ラーメン",
    "そば",
    "うどん",
    "寿司",
    "ピザ",
    "餃子",
    "チャーハン",
    "肉",
    "野菜",
  ]);
  const foodElements = myFavoriteFood.map((food) => <p key={food}>{food}</p>);

  function addFavoriteFood() {
    /**
     * チャレンジ2：
     * 「Add item」ボタンがクリックされるたびに、
     * `allFavoriteFood` 配列の中から1つずつデータを取り出して、
     * `myFavoriteFood`（state）に追加していきましょう。
     *
     * 追加された内容が画面に表示されるようにしてください。
     *
     * ヒント：
     * - すでに追加されている数（length）を使うと、次に追加する要素を決められます
     * - 例：allFavoriteFood[現在の配列の長さ]
     */
    if (allFavoriteFood.length == 0) {
      return;
    }
    const [head, ...rest] = allFavoriteFood
    setMyFavoriteFood([...myFavoriteFood, head])
    setAllFavoriteFood(rest)
  }

  return (
    <main>
      <button onClick={addFavoriteFood}>Add item</button>
      <section aria-live="polite">{foodElements}</section>
    </main>
  );
}
