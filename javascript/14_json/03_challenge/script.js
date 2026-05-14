const employeesJson = `[
  { "name": "田中 太郎", "department": "開発部", "skills": ["JavaScript", "React", "Node.js"] },
  { "name": "佐藤 花子", "department": "デザイン部", "skills": ["CSS", "Figma", "HTML"] },
  { "name": "鈴木 健一", "department": "開発部", "skills": ["Python", "JavaScript", "SQL"] },
  { "name": "山田 明美", "department": "営業部", "skills": ["Excel", "PowerPoint", "SQL"] }
]`;

function runChallenge() {
  const cardsContainer = document.getElementById('cards');
  const allSkillsDisplay = document.getElementById('allSkills');
  cardsContainer.innerHTML = '';

  /**
   * =============================================
   * ここにコードを書いてください
   *
   * 要件:
   * 1. employeesJson を JSON.parse() で配列にする
   * 2. 各社員をループして <div class="employee-card"> を作成
   *    カード内に:
   *    - <h3> に名前
   *    - <p> に部署
   *    - <p> にスキル（カンマ区切り）
   *    を追加し、cardsContainer に appendChild する
   * 3. 全社員のスキルを一つの配列にまとめ、重複を除去した後、
   *    JSON.stringify() で文字列にして allSkillsDisplay.textContent に表示する
   *    例: 全スキル（重複なし）: ["JavaScript","React",...]
   *
   * ヒント（重複除去）:
   *    const unique = [...new Set(allSkillsArray)];
   * =============================================
   */

  const employeeList = JSON.parse(employeesJson)
  const unique = new Set()
  for (const employee of employeeList) {
    cardsContainer.appendChild(createCard(employee));
    employee.skills.map(item => unique.add(item))
  }
  allSkillsDisplay.innerHTML = JSON.stringify(JSON.stringify([...unique]))


}

const dgetid = (id) => document.getElementById(id)
const dom_add = (dom, tag, content) => {
  const new_node = document.createElement(tag)
  new_node.innerHTML = content
  dom.appendChild(new_node)
  return new_node
}
const dom_update = (dom, new_content) => {
  dom.innerHTML = new_content
}

function createCard(employee) {
  const [name, department, skills] = [employee.name, employee.department, employee.skills]
  const con_div = document.createElement('div')
  con_div.classList.add('employee-card')

  dom_add(con_div, 'h3', name)
  dom_add(con_div, 'p', 'Department:' + department)
  dom_add(con_div, 'p', "Skills:" + skills.join(","))
  return con_div
}
