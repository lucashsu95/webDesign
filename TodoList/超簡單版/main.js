const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
let id = 0;

function add() {
    ul.innerHTML += `
    <li data-id='${++id}'>
        <h2>${input.value}</h2>
        <button onclick='edit(${id})'>編輯</button>
        <button onclick='del(${id})'>刪除</button>
    </li>`;
}

function del(id) {
    const li = document.querySelector(`li[data-id="${id}"]`);
    li.remove();
}

function edit(id) {
    const li = document.querySelector(`li[data-id="${id}"]`);
    const text = li.querySelector('h2')
    const new_text = prompt('請輸入想更改後的值', text.innerText)
    if (new_text) {
        text.innerText = new_text
    }
}