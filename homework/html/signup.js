var Password = document.getElementById("Password");
var Confirm_Password = document.getElementById("Confirm_Password");
var btn = document.getElementById("btn");

btn.addEventListener("click",function()
  {
    if(Password.value.length < 8 ) document.write("請設置八位數以上的密碼");
    else if(Password.value != Confirm_Password.value)  document.write("請輸入相同的密碼");
    else location.href="signin.html";
 })
