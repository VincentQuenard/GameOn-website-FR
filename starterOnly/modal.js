function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const buttonClose = document.querySelector(".close");
//const formClose = document.querySelector(".bground")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
buttonClose.addEventListener("click",closeModal);

//Close modal click out event
//formClose.addEventListener("click",closeModal);

//Close modal form
function closeModal() {
  modalbg.style.display = "none";

}

function checkcgu()
{
 if (document.getElementById('checkbox1').checked)
 {
  return true;
 }
 else
 {
  alert('Vous devez accepter les conditions d\'utilisation.');
  return false;
 }
}


