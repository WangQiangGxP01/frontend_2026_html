function showProfile() {
  const output = document.getElementById('profile');
  output.innerHTML = '';

  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - 以下の変数を宣言する:
   *     name  （文字列）: 自分の名前
   *     age   （数値）:   年齢
   *     job   （文字列）: 職業
   * - 変わらない値は const を使う
   * - #profile に各変数を1行ずつ表示する
   *
   * 表示例:
   *   名前: 田中 太郎
   *   年齢: 24
   *   職業: エンジニア
   *
   * ヒント:
   * - const p1 = document.createElement('p'); で段落を作成する
   * - p1.textContent = `名前: ${name}`; でテキストを設定する
   * - output.appendChild(p1); で追加する
   * - name, age, job それぞれに同じ手順を繰り返す
   * =========================================
   */
  const name = '王墻'
  const age = 29
  const job = 'Programmer'

  const table = [['name', 'age', 'job'], [name, age, job]]
  for (var i = 0; i < 3; i++) {
    const p = document.createElement('p');
    p.textContent = table[0][i] + ":" + table[1][i];
    output.appendChild(p)
  }
}
