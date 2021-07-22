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

//sélection des balises du formulaires
const prenom = document.getElementById('first');
const nom = document.getElementById('last');
const messagerie = document.getElementById('email');
const naissance = document.getElementById('birthdate');
const nombre_tournois = document.getElementById('quantity');
const ville = document.getElementsByName('location')
const focuscgu = document.getElementById('checkbox1');

// listener bouton ouverture formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fonction pour faire apparaitre le formulaire
function launchModal() {
  modalbg.style.display = "block";
}

// listener fermeture formulaire au clic sur la croix
buttonClose.addEventListener("click",closeModal);

//Close modal click out event
//formClose.addEventListener("click",closeModal);

//Fonction de fermeture formulaire au clic sur la croix
function closeModal() {
  modalbg.style.display = "none";

}
//Vérifications formulaires


//verification champ prénom non vide
prenom.addEventListener("change",checkprenom);
function checkprenom()
{
   if (prenom.value.length <2)
 {
  alert('Vous devez entrer plus de 2 charactères');
  return false;
 }
 else
 {
  return true;
 }
}

//verification champ nom non vide
nom.addEventListener("change",checknom);
function checknom()
{
   if (nom.value.length <2)
 {
  alert('Vous devez entrer plus de 2 charactères');
  return false;
 }
 else
 {
  return true;
 }
}

//Vérification si une des villes est cochée
ville.addEventListener("click", checkville);
function checkville()
{
  console.log(ville)
 if (ville.checked)
 {
  return true;
 }
 else
 {
  alert('Vous devez cocher une ville');
  return false;
 }
}






//vérification si cgu cochée
focuscgu.addEventListener("click",checkcgu);
function checkcgu()
{
 if (focuscgu.checked)
 {
  return true;
 }
 else
 {
  alert('Vous devez accepter les conditions d\'utilisation.');
  return false;
 }
}


/*squelette pour s'inspirer pour onsubmit : y mettre tous les champs et boutons ?
function valider(){
  // si la valeur du champ prenom est non vide
  if(document.formSaisie.prenom.value != "") {
    // les données sont ok, on peut envoyer le formulaire    
    return true;
  }
  else {
    // sinon on affiche un message
    alert("Saisissez le prénom");
    // et on indique de ne pas envoyer le formulaire
    return false;
  }
}*/

//idée validation button submit .....qui ne ....fonctionne pas
const envoyer = document.querySelector(".btn-submit");

envoyer.addEventListener('click', (e) => {
  e.preventDefault();
  alert('merci !');
})
