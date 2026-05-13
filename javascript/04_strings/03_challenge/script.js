function generateSplitMessage() {
  // ここにコードを書いてください
  // ヒント: 入力値を取得して Number() で数値に変換する
  // ヒント: 1人分 = Math.floor(合計 / 人数)  (小数点切り捨て)
  // ヒント: テンプレートリテラルで複数行のメッセージを作成する
  // ヒント: #split-output の textContent に設定する

  const params = {
    event_name: { id: 'event-name', val: null, cast: String },
    bill: { id: 'total-bill', val: null, cast: Number },
    head_count: { id: 'num-people', val: null, cast: Number },
  }
  for (const [k, v] of Object.entries(params)) {
    v.val = v.cast(document.getElementById(v.id).value)
  }

  const result = [
    "<h3>" + params.event_name.val + "</h3>",
    "<p>合計金額：" + params.bill.val + "</p>",
    "<p>人数：" + params.head_count.val + "</p>",
    "<p>一人当たり：" + Math.floor(params.bill.val / params.head_count.val) + "</p>",
  ]

  document.getElementById("split-output").innerHTML = result.join("")
}
