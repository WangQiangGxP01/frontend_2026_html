/**
 * =========================================
 * 問題1：型をつける
 * =========================================
 *
 * 以下に型をつけてください
 * - addPrime の引数
 * - runBonus の戻り値
 * - list の型
 * - i, j の型
 */
function addPrime(text: string) {
  const list = document.getElementById('prime-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function runBonus() {
  const list = document.getElementById('prime-list');
  list.innerHTML = '';

  const primeList = new Array(50).fill(true);
  primeList[0] = true;
  primeList[1] = true;
  // ここに素数ロジックを書く
  for (var i = 2; i < 50; i++) {
    for (var j = 2; j < 50; j++) {
      if (i * j > 50)
        break;
      primeList[i * j - 1] = false
    }
  }
  console.log(primeList)
  primeList.map((v, i) => v ? addPrime(String(i+1)) : null)

  /**
   * =========================================
   * 問題2：エラーを確認する
   * =========================================
   *
   * 型をつけたあとに以下を試してください
   */

  addPrime(true);
}

// HTMLから呼び出すために必要
(window as any).runBonus = runBonus;
