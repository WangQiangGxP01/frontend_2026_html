import "../styles.css";
import React from "react";

export default function App() {
  // Step 1:
  // count を管理する state を作る

  // Step 2:
  // API から取得したデータを保存する state を作る
  // まだデータがない状態を表すため、初期値は null にする

  // Step 3:
  // component が render されるたびに console に出力する

  // Step 4:
  // consoleを開く (console開く.pngを参考)

  // ❌ Side Effect in render
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(null);

  if (!data) {
    fetch("https://swapi.info/api/people/1")
      .then((res) => res.json())
      .then((result) => {
        console.log("Fetched!");
        setData(result);
      });
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Add</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
