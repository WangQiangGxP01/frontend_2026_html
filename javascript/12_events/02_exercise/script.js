/**
 * =============================================
 * ここにコードを書いてください
 *
 * 要件:
 * - id="countBtn" のボタンに click イベントリスナーを追加する
 * - クリックされるたびにカウントを +1 する
 * - id="countDisplay" の要素に「クリック数: X」を表示する
 *
 * ヒント:
 * - let count = 0; でカウント変数を用意する
 * - document.getElementById("countBtn").addEventListener("click", ...)
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

var count = 0
const btn_dom = dgetid('countBtn')
const display_dom = dgetid("countDisplay")

btn_dom.style.userSelect = 'none'
btn_dom.addEventListener('click', () => { count += 1; dom_update(display_dom, count); })