function f_show(Lary, Linput_text) {
    for (var i = 0; i < Linput_text.length; i++) {
        var Linput_value = document.querySelector("[name=" + Linput_text[i].name + "]");
        Linput_value.value = Lary[i];
        // console.log(Linput_value);
    }
    // var Name_ten = document.querySelector('[name="Itxt_10"]');
    // Name_ten.value = Lten;
}

function f_process(Lvalue, name) {
    var Lname = name.split('_')[1];
    is_NaN(Lvalue, Lname);
    // var Lten = parseInt(Lvalue, name).toString("10");
    var Linput_text = document.querySelectorAll("input[type=text]");
    var Lary = [];
    for (var i = 0; i < Linput_text.length; i++) {
        var Linput_num = Linput_text[i].name.split('_')[1];
        var Linput_content = parseInt(Lvalue, Lname).toString(Linput_num);
        Lary.push(Linput_content);
    }
    f_show(Lary, Linput_text);
}

function is_NaN(Lvalue, name) {
    if (name == '12' || name == '16' || name == '20' || name == '32' || name == '36') {
        return '';
    }
    if (isNaN(Lvalue)) {
        history.go(0);
    }
    for (var i = 0; i < Lvalue.length; i++) {
        // console.log(Lvalue[i], name);
        if (Lvalue[i] >= Number(name)) {
            // console.log("NaNerr");
            history.go(0);
            break;
        }
    }
}   