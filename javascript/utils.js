export const dgetid = (id) => document.getElementById(id)
export const dom_add = (dom, tag, content) => {
    const new_node = document.createElement(tag)
    new_node.innerHTML = content
    dom.appendChild(new_node)
    return new_node
}
export const dom_update = (dom, new_content) => {
    dom.innerHTML = new_content
}
