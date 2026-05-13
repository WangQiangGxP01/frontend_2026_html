let isDark = false;

function toggleTheme() {
  // ここに #main-box の背景色を白と黒で切り替えるコードを書いてください
  // ヒント: isDark フラグを使って現在の状態を管理する
  //         document.getElementById('main-box').style.backgroundColor で色を変更する
  //         文字色も一緒に切り替えると見やすくなります
  var themebtn = document.getElementById('main-box')
  themebtn.style.backgroundColor = themebtn.style.background == 'white' ? 'black' : 'white';
}

function addText() {
  // ここにテキストを #text-list に追加するコードを書いてください
  // ヒント:
  // - document.getElementById('text-input').value で入力値を取得する
  // - 空の場合は何もしない
  // - document.createElement('li') でリストアイテムを作成する
  // - 入力欄を空にする（入力後にクリアする）
  var text = document.getElementById('text-input').value
  var new_line = document.createElement('li')
  new_line.textContent = text
  document.getElementById('text-list').appendChild(new_line)
}

function clearList() {
  // ここに #text-list を空にするコードを書いてください
  document.getElementById('text-list').textContent = ''
}
