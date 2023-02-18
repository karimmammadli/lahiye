const cname = document.getElementById("ad");
const price = document.getElementById("price");
const photo = document.getElementById("compfoto");
let comps;

const modal = document.getElementById("modal-click");
const saxla = document.getElementsByClassName("saxla");

const yazilan = document.getElementById("yazilan");

const users = JSON.parse(localStorage.getItem("users"));

const userIndex = localStorage.getItem("index");

modal.addEventListener("click",function(i){
  i.preventDefault();
})

saxla.addEventListener("click",function(e){
  e.preventDefault();
  comps = {
    compname: cname.value,
    price: price.value,
    photo: photo.value,
    ID: users[userIndex].fname
  }
  users[userIndex].comps.push(comps);

  localStorage.setItem("users", JSON.stringify(users));

  window.location.reload();
});

users[userIndex].comps.forEach((comp,i) => {
  showCompsOnPage(comp);
});

function showCompsOnPage(obj){
 let txt =`</tr>
 <td class="my-1">${obj.ID}</td>
 <td class="my-1">${obj.name}</td>
 <img class="w-100" src="${obj.photo}" alt="">
 <td class="my-1">${obj.price}</td>
 <button class="text-success edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="${i}">Edit</button>
 <button class="text-danger remove" id="${i}">Remove</button>
  </tr>`;
   yazilan.innerHTML += txt;
}