function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');

  li.textContent = text;
  list.appendChild(li);
}

/**
 * =============================================
 * 問題：book オブジェクトを完成させる
 *
 * 条件：
 * - 各プロパティに型をつける
 * - describe に戻り値の型をつける
 * =============================================
 */

const book = {
  title: "JavaScript入門",
  author: "田中 一郎",
  year: 2023,
  pages: 320,
  describe: function () {
    return "「" + this.title + "（" + this.author + ", " + this.year + ", " + this.pages + "ページ）」";
  }
}

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  addItem('タイトル: ' + book.title);
  addItem('著者: ' + book.author);
  addItem('出版年: ' + book.year);
  addItem('ページ数: ' + book.pages);
  addItem(book.describe());
}

(window as any).run = run;
