const cname = document.getElementById("ad");
const price = document.getElementById("price");
const photo = document.getElementById("compfoto");
let comps;

const modal = document.getElementById("modal-click");
const saxla = document.getElementById("saxla");

const yazilan = document.getElementById("yazilan");

const users = JSON.parse(localStorage.getItem("users"));

const userIndex = localStorage.getItem("index");

modal.addEventListener("click",function(i){
  i.preventDefault();
})

 saxla.addEventListener("click",function(){
  comps = {
    compname: cname.value,
    price: price.value,
    photo: photo.value,
    owner: users[userIndex].username
  }
  users[userIndex].comps.push(comps);

  localStorage.setItem("users", JSON.stringify(users));

  window.location.reload();
});

users[userIndex].comps.forEach((comp,i) => {
  showCompsOnPage(comp);
});

function showCompsOnPage(comps,i){
 let txt =`</tr>
 <td class="my-1">${comps.owner}</td>
 <td class="my-1">${comps.compname}</td>
 <img class="w-100" src="${comps.photo}" alt="a">
 <td class="my-1">${comps.price}</td>
 <button class="text-success edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="${i}">Edit</button>
 <button class="text-danger remove" id="${i}">Remove</button>
  </tr>`;
   yazilan.innerHTML += txt;
}