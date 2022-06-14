var password = document.getElementById("password");
var passwordcheck = document.getElementById("passwordcheck");

passwordcheck.addEventListener("click",function()
{
   if(password.value.length > 8 ) location.href='autumn.html';
   else  document.write("請設置八位數以上的密碼");
})
