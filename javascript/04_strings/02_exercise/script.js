function generateGreeting() {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - #input-name, #input-age, #input-place, #input-hobby の値を取得する
   * - テンプレートリテラル（バッククォート）を使ってメッセージを作成する
   * - #greeting-output の textContent にメッセージを設定する
   *
   * 表示例:
   *   はじめまして！
   *   私の名前は田中 太郎です。
   *   年齢は24歳で、東京出身です。
   *   趣味は読書です。
   *   よろしくお願いします！
   *
   * ヒント:
   * - テンプレートリテラルの中で改行すると、実際に改行される
   * - document.getElementById('input-name').value で値を取得できる
   * =========================================
   */
  console.log("HIT")
  const idlist = [
    "name",
    "age",
    "place",
    "hobby"
  ]

  var params = {}
  idlist.map(x => params[x] = String(document.getElementById("input-" + x).value))

  const intro =
    ["はじめまして！",
      "私の名前は" + params.name + "です。",
      "年齢は" + params.age + "歳で、" + params.place + "出身です。",
      "趣味は" + params.hobby + "です。",
      "よろしくお願いします！"
    ].map(x => "<p>" + x + "</p>").join("")
  console.log(intro)
  document.getElementById('greeting-output').innerHTML = intro
}
