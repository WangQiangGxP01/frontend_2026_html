function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function runLoop() {
  const list = document.getElementById('list');

  // リセット
  list.innerHTML = '';

  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - for文を使う（1〜20）
   * - 条件分岐を使う（if）
   * - FizzBuzzルールに従う
   *
   * ヒント:
   * - %（余り）を使う
   * =========================================
   */
  for (var i = 1; i <= 20; i++) {
    var x = String(i)
    if (i % 5 === 0 && i % 3 === 0) {
      x = "FizzBuzz"
    } else if (i % 5 === 0) {
      x = "Buzz"
    } else if (i % 3 === 0) {
      x = "Fizz"
    }
    const p = document.createElement('p')
    p.textContent = x
    list.appendChild(p)
  }
}
