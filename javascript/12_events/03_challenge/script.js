/**
 * =============================================
 * ここにコードを書いてください
 *
 * 要件:
 * - id="myForm" の submit イベントを検知する
 * - 名前 (id="nameInput") またはメール (id="emailInput") が
 *   空の場合は e.preventDefault() で送信を止める
 * - id="error" にエラーメッセージを表示する
 *   例：「名前とメールを両方入力してください。」
 * - 両方入力されていれば「送信成功！」を表示する
 *
 * ヒント:
 * - document.getElementById("myForm").addEventListener("submit", (e) => { ... })
 * - input の値は inputElement.value で取得できる
 * - 空チェック: value === ""
 * =============================================
 */
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

const name_dom = dgetid("nameInput")
const mail_dom = dgetid("emailInput")
const form_dom = dgetid("myForm")
const error_dom = dgetid("error")

form_dom.addEventListener("submit", (e) => {
    e.preventDefault()
    error_dom.innerHTML = ""
    if (name_dom.value === "") {
        dom_add(error_dom, 'p', "ERROR:EMPTY NAME")
    }
    if (mail_dom.value === "") {
        dom_add(error_dom, 'p', "ERROR:EMPTY EMAIL")
    }
    if (error_dom.innerHTML === "") {
        error_dom.innerHTML = "送信成功！"
    }
})