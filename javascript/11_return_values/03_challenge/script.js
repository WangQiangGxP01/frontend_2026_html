function addResult(text) {
  const list = document.getElementById('result-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

/**
 * =============================================
 * ここに関数 calcBMI を作ってください
 *
 * - 引数: weight (体重kg), height (身長m)
 * - return: BMI (小数点2桁に丸める)
 *   BMI = weight / (height * height)
 *   ヒント: parseFloat(value.toFixed(2)) を使う
 * =============================================
 */

/**
 * =============================================
 * ここに関数 getBMICategory を作ってください
 *
 * - 引数: bmi (数値)
 * - return: "低体重" / "普通体重" / "過体重" / "肥満"
 * =============================================
 */

function calcBMI(weight, height) {
  return (Number(weight) / (Number(height) ** 2)).toFixed(2)
}

function getBMICategory(bmi) {
  const table = [18.5, 25, 30]
  const category = ["低体重", "普通体重", "過体重", "肥満"];
  for (const [i, max_bmi] of table.entries()) {
    if (bmi < max_bmi)
      return category[i];
  }
  return category[category.length - 1];
}

function runChallenge() {
  const list = document.getElementById('result-list');
  list.innerHTML = '';

  const people = [
    { name: '田中さん', weight: 55, height: 1.7 },
    { name: '佐藤さん', weight: 80, height: 1.65 },
    { name: '山田さん', weight: 48, height: 1.6 },
    { name: '鈴木さん', weight: 100, height: 1.75 },
  ];

  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    const bmi = calcBMI(p.weight, p.height);
    const category = getBMICategory(bmi);
    addResult(`${p.name}: BMI=${bmi} → ${category}`);
  }
}
