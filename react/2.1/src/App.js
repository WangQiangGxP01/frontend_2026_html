import "./styles.css";
import React from "react";

export default function App() {
  let state = "Yes";

  function handleClick() {
    state = "No";
    setIsHappy(prev => !prev)
  }

  // const result = React.useState("はい");
  // console.log(result);

  const [isHappy, setIsHappy] = React.useState(true)

  return (
    <main>
      <h1 className="title">Reactは楽しい?</h1>
      <button onClick={handleClick} className="value">
        {isHappy ? "はい" : "いいえ"}
      </button>
    </main>
  );
}

/**
 * チャレンジ1：
 * 1. ターミナル（またはコンソール）を開いて、console.logの出力を確認しましょう。
 * 2. 画面の「Yes」ボタンをクリックして、文字が変わるか確認しましょう。
 *    （変わらないはずです！）
 * 3. コメントアウトされている2行目・11行目・12行目を解除して、useState関数を使ってみましょう。
 * 4. コンソールの出力を確認しましょう。
 * 5. 出力内容を考えてみましょう。そして、stateの代わりにresultの1つ目の値を使ってみましょう。
 *
 * 終わったら「6.4 useState②.md」へ続く
 */

/**
 * チャレンジ2：
 * 1. 5〜12行目をコメントアウトし、14行目のコメントアウトを解除しましょう。
 * 2. []の中の変数名を変更しましょう。
 *    valueは「isHappy」、funcは「setIsHappy」にしてください。
 * 3. 14行目の下に、`handleClick` という関数を作成し、
 *    setIsHappy("いいえ") を実行するようにしましょう。
 * 4. ボタンにクリックイベントを追加し、
 *    ボタンがクリックされたときに `handleClick` が実行されるようにしましょう。
 * 5. return内のbuttonタグの表示を、作成したstate（isHappy）を使うように変更しましょう。
 *
 * 終わったら「6.5 useState③.md」へ続く
 */

/**
 * チャレンジ3：
 * 1. `isHappy` を使って、ボタンの中の表示を三項演算子に変更しましょう。
 *    `isHappy` が true のときは「はい」、
 *    false のときは「いいえ」と表示するようにしてください。
 * 2. `handleClick` の中で、`setIsHappy("いいえ")` のように
 *    直接固定の値を入れるのではなく、
 *    callback関数を使ってstateを切り替えるようにしましょう。
 * 3. `setIsHappy(prev => !prev)` の形を使って、
 *    ボタンを押すたびに true / false が切り替わるようにしてください。
 * 4. 動作を確認しましょう。
 *    ボタンをクリックするたびに、
 *    「はい」⇄「いいえ」が切り替われば成功です。
 */
