function calcBMI() {
  // ここにコードを書いてください
  // ヒント: Number() で文字列を数値に変換する
  // ヒント: 身長は cm → m に変換が必要 (÷ 100)
  // ヒント: BMI = 体重 / (身長m * 身長m)
  // ヒント: bmi.toFixed(2) で小数点2桁に丸める
  // ヒント: if/else で判定して document.getElementById('bmi-result').textContent に表示する
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value/100;
  const bmi = (weight / (height * height)).toFixed(2)
  const result = bmi < 18.5 ? "やせ" : bmi < 25 ? "普通" : "肥満";
  const result_dom=document.getElementById('bmi-result')
  result_dom.textContent="BMI:"+bmi+" >>> "+ result;
}
