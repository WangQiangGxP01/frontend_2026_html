/**
 * =============================================
 * 問題：フォームバリデーションを完成させる
 *
 * 条件：
 * - DOMに型をつける
 * - submitイベントを使う
 * - 空チェックを行う
 * =============================================
 */

const dgetid = (id: string) => {
    const node = document.getElementById(id)
    if (!node) throw new Error("FALSE GET")
    return node
}
const dom_add = (dom: HTMLElement, tag: string, content: string) => {
    const new_node = document.createElement(tag)
    new_node.innerHTML = content
    dom.appendChild(new_node)
    return new_node
}
const dom_update = (dom: HTMLElement, new_content: string) => {
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
