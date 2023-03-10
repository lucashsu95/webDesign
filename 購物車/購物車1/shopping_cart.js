const products = document.querySelector('.products')
const price = document.querySelector('#price')
var Lsum = 0;
const productData = [{
    img: 'images/地瓜.jpg',
    style: 'color:#ff1000;font-weight:bold;',
    name: '地瓜',
    price: 25,
    amount: 0
}, {
    img: 'images/芋頭.jpg',
    style: 'color:#ff1000;font-weight:bold;',
    name: '芋頭',
    price: 50,
    amount: 0
}, {
    img: 'images/Wendan(3).jpg',
    style: 'color:#ff1000;font-weight:bold;',
    name: '文旦',
    price: 100,
    amount: 0
}, {
    img: 'images/green-bamboo-shoot.jpg',
    style: 'color:#ff1000;font-weight:bold;',
    name: '綠竹筍',
    price: 100,
    amount: 0
}, {
    img: 'images/Wenshan-Baozhong-Tea.jpg',
    style: 'color:#ff1000;font-weight:bold;',
    name: '筊白筍',
    price: 200,
    amount: 0
}, {
    img: 'images/東方美人茶.jpg',
    style: 'color:#ff1000;font-weight:bold;',
    name: '東方美人茶',
    price: 120,
    amount: 0
}]

productData.forEach((data, i) => {
    // console.log(i)
    products.innerHTML += (`
    <div class='container'>
        <img src="${data.img}" alt="" class="images">
        <p class='productName'>${data.name}</p>
        <p style='${data.style}'>NT$${data.price}</p>
        <div class="buy">
            <input type="button" value="-" onclick="f_add(${i}, -1)" class='btn'>
            <input type="text" oninput='f_click(${i})' value='${data.amount}' name='${data.name}' class="price" >
            <input type="button" value="+" onclick="f_add(${i}, 1)" class='btn'>
        </div>
    </div>
    `)
})

function f_add(i, n) {
    productData[i].amount += n
    if (productData[i].amount < '0') {
        productData[i].amount = 0;
        return '';
    }

    document.querySelectorAll('.price')[i].value = productData[i].amount
    // console.log('price', document.querySelectorAll('.price')[i].value)
    f_process()
}
function f_click(i) {
    var Lvalue = document.querySelectorAll('.price')[i].value;
    var old = productData[i].amount
    productData[i].amount = Number(Lvalue);

    if (!productData[i].amount) {
        productData[i].amount = 0;
        document.querySelectorAll('.price')[i].value = old
        alert('請輸入數字!')
        return '';
        // history.go(0);
    }
    f_process()
}

function f_process() {
    // console.log(i)
    var Lsum = 0;
    var buyminSum = document.querySelector('.buyminSum');
    var buySum = document.querySelector('.buySum');
    var Linput_hidden = document.getElementById('hid');
    console.log(Linput_hidden);

    productData.forEach((data, i) => {
        Lsum += Number(data.price * data.amount)
    })
    buyminSum.innerHTML = '小計$' + Lsum + '元';
    buySum.innerHTML = '總計' + Number(Lsum + 60) + '元';
    Linput_hidden.value = Number(Lsum + 60);
}

function f_show() {
    var Lname = '';
    productData.forEach((data) => {
        Lname += data.name + ':' + data.amount + "\n"
        Lsum += Number(data.price * data.amount)
    })
    alert(Lname + '小計$' + Lsum + '元\n' + '總額$' + Number(Lsum + 60) + '元');
}
