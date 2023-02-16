const daxil = document.querySelector("#qeydiyat");
const username = document.querySelector("#username");
const out = document.querySelector("#logout");
const ourcomp = document.querySelector(".ourcomp");

const userArray = JSON.parse(localStorage.getItem("users"));

if(localStorage.getItem("index")){
              let userIndex = localStorage.getItem("index");
              username.innerText = userArray[userIndex].name;
              daxil.classList.add("d-none");
              ourcomp.classList.remove("d-none");
              out.classList.remove("d-none");
}
out.addEventListener("click",function () {
              this.classList.add("d-none");     
              out.classList.add("d-none");
              username.classList.add("d-none"); 
              ourcomp.classList.add("d-none"); 
              daxil.classList.remove("d-none");
              localStorage.removeItem("index");
              window.location.reload();
});