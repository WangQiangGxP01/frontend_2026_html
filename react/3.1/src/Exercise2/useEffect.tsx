import "../styles.css";
import React, { useEffect } from "react";

var globalCounter = 0

export default function App() {
  // Step 1:
  // index.tsx を開き、以下のようにコードを書き換える
  // import App from "./Exercise1/sideEffectInRender";
  // → import App from "./Exercise2/useEffect";

  // Step 2:
  // sideEffectInRender.tsx のコードを復習する
  // state を定義する
  // logを追加する

  // Step 3:
  // useEffect を使ってsideEffectを実行する
  // fetch 処理を useEffect の中に移動する
  // dependency array は [] にする（初回のみ実行）
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(null);

  useEffect(() => {
    console.log(globalCounter); globalCounter++;
    fetch("https://swapi.info/api/people/1")
      .then((res) => res.json())
      .then((result) => {
        console.log("Fetched!");
        setData(result);
      });
  }, [])

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount((c) => c + 1)}>Add</button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
