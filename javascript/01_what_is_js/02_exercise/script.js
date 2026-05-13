let count = 0;

function addParagraph() {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - count 変数を 1 増やす
   * - <p> 要素を作成して「ボタンが N 回 押されました！」と表示する
   * - 作成した要素を #output に追加する
   *
   * ヒント:
   * - document.createElement('p') で要素を作成する
   * - element.textContent でテキストを設定する
   * - document.getElementById('output').appendChild() で追加する
   * =========================================
   */
  let new_p = document.createElement('p');
  count++;
  new_p.textContent = "Btn pushed " + count + " times.";
  document.getElementById("output").appendChild(new_p);
}

function resetOutput() {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - count を 0 にリセットする
   * - #output の中身を空にする
   *
   * ヒント:
   * - element.textContent = '' で中身を空にできる
   * =========================================
   */
  document.getElementById("output").textContent = "";
  count = 0
}
