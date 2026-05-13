function addPrime(text) {
  const list = document.getElementById('prime-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function runBonus() {
  const list = document.getElementById('prime-list');
  list.innerHTML = '';
  const workingMap = [];
  for (var i = 0; i < 50; i++) {
    workingMap.push(true)
  }
  workingMap[0] = false
  workingMap[1] = false
  for (var i = 2; i < 50; i++) {
    for (var j = 2; j < 50; j++) {
      if (i * j > 50)
        break;
      workingMap[i * j - 1] = false;
    }
  }
  for (var i = 0; i < 50; i++) {
    if (workingMap[i]) {
      addPrime(String(i + 1))
    }
  }

  // ここにfor文を使って2〜50の素数をリスト表示するコードを書いてください
  // ヒント: for文の中にfor文（ネスト）を使う
}
