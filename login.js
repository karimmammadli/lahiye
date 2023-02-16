const usern = document.getElementById("usern");
const pass = document.getElementById("password");
const loginForm = document.getElementById("log");

let arr;

if(localStorage.getItem("users")){
   arr = JSON.parse(localStorage.getItem("users"));
}else{
   arr =[];
}

loginForm.addEventListener("click", function (e) {
   e.preventDefault;
   let istifadeci = true;

   for (let i = 0; i < arr.length; i++) {
      if (usern.value == arr[i].username) {
         istifadeci = false;
         if (pass.value == arr[i].pass) {
            alert("Hesab Dogrulandi");
            //localStorage.setItem("currentUser",arr[i].fname);
            //localStorage.setItem("useremail", arr[i].Email)
            localStorage.setItem("index", i);
            window.location.assign("index.html");
         } else {
            alert("Parol Yanlishdir");
         }
      }
   }
   if (istifadeci) {
      alert("Bele Bir Hesab Yoxdur");
   };
});