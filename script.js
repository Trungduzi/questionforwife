let forget = document.getElementById("forget");

forget.addEventListener("click", function() {
    window.location.href = "https://chatgpt.com/c/67fbdf1a-2544-8002-a06c-f8e9eb0d2766";
});

let logindss = document.getElementById("logindss");
let display1 = document.getElementById("display1");
let tk = document.getElementById("tk");
let mk = document.getElementById("mk");

logindss.addEventListener("click", handleclick);
display1.addEventListener("keydown", function(enter){
    if(enter.key == "Enter"){
        if(tk.value == "trungduzi17050405" && mk.value =="21022025"){
            alert("Bạn đã đăng nhập thành công!");
            display1.style.display = "none";
        }
        else{
            alert("Thông tin tài khoản mật khẩu không chính xác vui lòng nhập lại!");
        }
    }
});

function handleclick(){
    if(tk.value == "trungduzi17050405" && mk.value =="21022025"){
            alert("Bạn đã đăng nhập thành công!");
            display1.style.display = "none";
        }
    else{
        alert("Thông tin tài khoản mật khẩu không chính xác vui lòng nhập lại!");
    }
}   