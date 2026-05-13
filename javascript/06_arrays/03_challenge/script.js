function printList(list) {
  return "[" + list.map(String).join(",") + "]"
}

function processNumbers() {
  // ここにコードを書いてください
  // ヒント: document.getElementById('numbers-input').value で入力値を取得
  // ヒント: .split(',') でカンマ区切りの文字列を配列にする
  // ヒント: .map(Number) で文字列の配列を数値の配列に変換する
  // ヒント: .filter(n => n % 2 === 0) で偶数だけ取り出す
  // ヒント: .map(n => n * 2) で各要素を2倍にする
  // ヒント: 各ステップの結果を #numbers-output に innerHTML で表示する
  const input_dom = document.getElementById("numbers-input")
  const step1 = input_dom.value.split(",")
  const step2 = step1.map(x => Number(x))
  const step3 = step2.filter(n => n % 2 === 0)
  const step4 = step3.map(n => n * 2)
  const table = [step1, step2, step3, step4]
  const result_dom = document.getElementById("numbers-output")
  result_dom.innerHTML = ""
  table.map((x, i) => {
    const p = document.createElement('p');
    p.innerHTML = "step" + i + " " + printList(x);
    result_dom.appendChild(p)
  });
}

