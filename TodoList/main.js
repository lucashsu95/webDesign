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
        <article class="active message border p-3 m-3 d-flex justify-content-between" data-id="${++id}">
            <div>
                <h5>${title.value}</h5>
                <p>${content.value}</p>
                <small class='text-muted'>${new Date().toLocaleString()}</small>
            </div>
            <div class='d-flex gap-2 justify-content-between align-items-center'>
                <button class="btn btn-outline-success" onclick="editmsg(${id})">修改</button>
                <button class="btn btn-outline-danger" onclick="deletemsg(${id})">刪除</button>
            </div>
        </article>
    `
    
    title.value = ''
    content.value = ''
    setTimeout(() => {
        const article = document.querySelector(`article[data-id="${id}"]`)
        article.classList.remove('active')
        updateData()
    }, 1000);
}

function deletemsg(id) {
    console.log(id);
    const article = document.querySelector(`article[data-id="${id}"]`)
    article.classList.add('del')
    setTimeout(() => {
        article.remove()
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
    const article = document.querySelector(`article[data-id="${id}"]`)
    const btn = article.querySelector('.btn-outline-success')
    const h5 = article.querySelector('h5')
    const p = article.querySelector('p')
    if (btn.innerText === '確認') {
        h5.innerHTML = article.querySelector('.tt').value
        p.innerHTML = article.querySelector('.pp').value
        btn.innerText = '修改'
    } else {
        h5.innerHTML = `<input type="text" class="form-control w-100 tt" value="${h5.innerText}">`
        p.innerHTML = `<input type="text" class="form-control w-100 pp" value="${p.innerText}">`
        btn.innerText = '確認'
    }
    updateData()

}