/**
 * =============================================
 * 問題：クリックカウンターを完成させる
 *
 * 条件：
 * - DOMに型をつける
 * - count に型をつける
 * - clickイベントを追加する
 * =============================================
 */

const dgetid = (id: string) => document.getElementById(id)
const dom_add = (dom: HTMLElement, tag: string, content: string) => {
    const new_node = document.createElement(tag)
    new_node.innerHTML = content
    dom.appendChild(new_node)
    return new_node
}
const dom_update = (dom: HTMLElement, new_content: string) => {
    dom.innerHTML = new_content
}

var count = 0
const btn_dom = dgetid('countBtn')
const display_dom = dgetid("countDisplay")

btn_dom.style.userSelect = 'none'
btn_dom.addEventListener('click', () => { count += 1; dom_update(display_dom, count); })