const firstname = document.getElementById("Name");
// const first = document.getElementById("first");
const number = document.getElementById("number");
// const surname = document.getElementById("surnm");
const usern = document.getElementById("usern");
// const gmail = document.getElementById("gml");
const pass = document.getElementById("password");
// const parol = document.getElementById("pswrd");
const form = document.getElementById("Sign-up");
const signupbtn = document.getElementById("signup");

let arr;

if(localStorage.getItem("users")){
     arr = JSON.parse(localStorage.getItem("users"));
  }else{
     arr =[];
  }

signupbtn.addEventListener('click', function (i) {
   const obj = {
        name: firstname.value,
        number: number.value,
        username: usern.value,
        pass: pass.value,
        comps: []
   };
   arr.push(obj);
   let jsonArr = JSON.stringify(arr);
   localStorage.setItem('users', jsonArr);
   window.location.assign("login.html");
   if(obj = 2){
        alert("bele bir hesab var !")
     }
});