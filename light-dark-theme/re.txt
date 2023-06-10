# Theme

- bind用法，要是不想用Jquery可以用bind把想要的做縮簡
```
const q = document.querySelector.bind(document);
const Lswitch = q(".switch");
```
- setProperty 為CSS樣式設一個新的值
```
document.documentElement.style.setProperty("CSS的名字", "新的值");
```

- Css root 變數設定方法
```
    :root {
        --header: #f90;
        --fontColor: #444;
        --logoColor: #eee;
        --backgroundColor: #fff;
    }
```