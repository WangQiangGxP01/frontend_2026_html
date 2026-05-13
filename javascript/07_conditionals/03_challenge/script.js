function showDaysInMonth() {
  // ここにコードを書いてください
  // ヒント: Number() で入力値を数値に変換する
  // ヒント: うるう年の判定: (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  // ヒント: switch 文で月に対応する日数を求める
  //   - 1,3,5,7,8,10,12月 → 31日
  //   - 4,6,9,11月 → 30日
  //   - 2月 → うるう年なら29日、それ以外は28日
  // ヒント: 三項演算子でうるう年かどうかを表示する
  // ヒント: #days-output の textContent に結果を表示する
  const month = Number(document.getElementById("month-input").value)
  const year = Number(document.getElementById("year-input").value)
  var day_count = -1
  switch (month) {
    case 1: day_count = 31; break;
    case 2: day_count = year % 4 === 0 ? 29 : 28; break;
    case 3: day_count = 31; break;
    case 4: day_count = 30; break;
    case 5: day_count = 31; break;
    case 6: day_count = 30; break;
    case 7: day_count = 31; break;
    case 8: day_count = 31; break;
    case 9: day_count = 30; break;
    case 10: day_count = 31; break;
    case 11: day_count = 30; break;
    case 12: day_count = 31; break;
    default: day_count = -1
  }
  document.getElementById("days-output").innerHTML = String(day_count)
}
