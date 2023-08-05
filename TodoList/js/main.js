const title = document.querySelector('#title')
const content = document.querySelector('#content')
const messages = document.querySelector('#messages')
let id = 0

function addmsg() {
    if (title.value === '' || content.value === '') {
        alert('請填寫完整')
        return
    }
    messages.innerHTML += `
        <li class="show message list-group-item d-flex justify-content-between" data-id="${++id}">
            <div>
                <h5>${title.value}</h5>
                <p>${content.value}</p>
                <small class='text-muted'>${new Date().toLocaleString()}</small>
            </div>
            <div class='d-flex gap-2 align-items-end'>
                <button class="btn btn-outline-success" onclick="editmsg(${id})">修改</button>
                <button class="btn btn-outline-danger" onclick="deletemsg(${id})">刪除</button>
            </div>
        </li>
    `
    
    title.value = ''
    content.value = ''
    setTimeout(() => {
        const li = document.querySelector(`li[data-id="${id}"]`)
        li.classList.remove('show')
        updateData()
    }, 1000);
}

function deletemsg(id) {
    console.log(id);
    const li = document.querySelector(`li[data-id="${id}"]`)
    li.classList.add('del')
    setTimeout(() => {
        li.remove()
        updateData()
    }, 800);
}

function updateData() {
    const data = messages.innerHTML
    localStorage.setItem('data', JSON.stringify({ id: id, data: data }))
}

function render() {
    if (localStorage.getItem('data')) {
        const datas = JSON.parse(localStorage.getItem('data'))
        id = datas['id']
        messages.innerHTML = datas['data']
    }
}

render()

function editmsg(id) {
    const li = document.querySelector(`li[data-id="${id}"]`)
    const btn = li.querySelector('.btn-outline-success')
    const h5 = li.querySelector('h5')
    const p = li.querySelector('p')
    if (btn.innerText === '確認') {
        h5.innerHTML = li.querySelector('.tt').value
        p.innerHTML = li.querySelector('.pp').value
        btn.innerText = '修改'
    } else {
        h5.innerHTML = `<input type="text" class="form-control w-100 tt" value="${h5.innerText}">`
        p.innerHTML = `<input type="text" class="form-control w-100 pp" value="${p.innerText}">`
        btn.innerText = '確認'
    }
    updateData()

}