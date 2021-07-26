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
const focuscgu = document.getElementById('checkbox1');


//Regex
const regexLettres = /^[a-zA-Z-\s]+$/;
const regNombres = /^[0-9]+$/;
const regexMessagerie = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexDateNaissance = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
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
prenom.addEventListener("change",checkPrenom);
function checkPrenom()
{
   if (prenom.value.length <2)
 {
  alert('Vous devez entrer plus de 2 charactères dans le champ prénom');
  return false;
 }
 else
 {
  return true;
 }
}
//verification champ nom non vide
nom.addEventListener("change",checkNom);
function checkNom()
{
   if (nom.value.length <2)
 {
  alert('Vous devez entrer plus de 2 charactères dans le champ nom');
  return false;
 }
 else
 {
  return true;
 }
};

//verification email valide
//La méthode exec() de RegExp va rechercher des correspondances entre
// une expression régulière et une chaine de caractères.
messagerie.addEventListener("change",checkMail)
function checkMail (){
  if (regexMessagerie.exec(messagerie.value) == null)
  {
    alert('Veuillez entrer une adresse de messagerie valide');
  return false;
 }
 else
 {
  return true;
 }
};


//verification date de naissance valide
naissance.addEventListener("change",checkAnniversaire)
function checkAnniversaire(){
  if (regexDateNaissance.exec(naissance.value) == null)
  {
    alert('Veuillez entrer une date de naissance valide');
    return false;
  }
  else
  {
    return
  }
}

//verification nombre de tournois compris entre 0 et 99

nombre_tournois.addEventListener("change",tournois);
function tournois()
{
   if (nombre_tournois.value.length >=1)
 {
    return true
 }
 else
 {
  alert('Vous devez entrer plus de 2 charactères dans le champ nom');
  return false;
 }
};

//Un bouton radio est séléctionné par défaut

document.querySelector('#location1').checked = true;



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
/*const envoyer = document.querySelector(".btn-submit");

envoyer.addEventListener('click', (e) => {
  e.preventDefault();
  alert('merci !');
})*/
