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
const erreur_prenom = document.getElementById('erreur_prenom');
const nom = document.getElementById('last');
const erreur_nom = document.getElementById('erreur_nom');
const messagerie = document.getElementById('email');
const erreur_messagerie = document.getElementById('erreur_email');
const naissance = document.getElementById('birthdate');
const erreur_naissance = document.getElementById('erreur_anniversaire');
const nombre_tournois = document.getElementById('quantity');
const erreur_nbTournois = document.getElementById('erreur_nombre');
const focuscgu = document.getElementById('checkbox1');
const erreur_cgu = document.getElementById('erreur_cgu');
const formulaire = document.getElementsByName('reserve')


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
//on écoute le submit    VALIDATE NE FONCTIONNE PAS..........
/*formulaire.addEventListener("submit", validate)
function validate(e){ */
//verification champ prénom non vide
prenom.addEventListener("change",checkPrenom);
function checkPrenom()
{
  if (prenom.value ===0 || prenom.value.length <=2)//le prénom est vide ou à moins de 2 charactères
  {erreur_prenom.textContent="Le prénom doit comporter 2 charactères minimum.";
  erreur_prenom.style.fontSize = "16px";
  erreur_prenom.style.color = "pink";
}else{
  erreur_prenom.textContent="" //pas d'erreur donc pas de message
};
  /* if (prenom.value.length <2)
 {
  alert('Vous devez entrer plus de 2 charactères dans le champ prénom');
  return false;
 }
 else
 {
  return true;
 }*/
}
//verification champ nom non vide
nom.addEventListener("change",checkNom);
function checkNom()
{
  if (nom.value ===0 || nom.value.length <=2)//le prénom est vide ou à moins de 2 charactères
  {erreur_nom.textContent="Le nom doit comporter 2 charactères minimum."
  erreur_nom.style.fontSize = "16px";
  erreur_nom.style.color = "pink";
}else{
  erreur_nom.textContent="" //pas d'erreur donc pas de message
};
}; 

//verification email valide
//La méthode exec() de RegExp va rechercher des correspondances entre
// une expression régulière et une chaine de caractères.
messagerie.addEventListener("change",checkMail)
function checkMail (){
  if(regexMessagerie.test(messagerie.value)){// test regex ok
    erreur_messagerie.textContent ="";
    // Pas d'erreur
 
  }
  else{// Caractère absent ou ne répondant pas aux conditions du regex
    erreur_messagerie.textContent ="Veuillez entrer une adresse de messagerie valide";
    erreur_messagerie.style.fontSize = "16px";
    erreur_messagerie.style.color = "pink";
      }
  /*if (regexMessagerie.exec(messagerie.value) == null)
  {
    alert('Veuillez entrer une adresse de messagerie valide');
  return false;
 }
 else
 {
  return true;
 }*/
};


//verification date de naissance valide
naissance.addEventListener("change",checkAnniversaire)
function checkAnniversaire(){
  if(regexDateNaissance.test(naissance.value)){// test regex ok
    erreur_naissance.textContent ="";
    // Pas d'erreur
    }
  else{// Caractère absent ou ne répondant pas aux conditions du regex
    erreur_naissance.textContent ="Veuillez entrer une date de naissance valide";
    erreur_naissance.style.fontSize = "16px";
    erreur_naissance.style.color = "pink";
    }
 /* if (regexDateNaissance.exec(naissance.value) == null)
  {
    alert('Veuillez entrer une date de naissance valide');
    return false;
  }
  else
  {
    return
  }*/
}

//verification nombre de tournois compris entre 0 et 99

nombre_tournois.addEventListener("change",tournois);
function tournois(){

  if (nombre_tournois.value === "")
  {erreur_nbTournois.textContent="Vous devez entrer un nombre dans ce champ";
  erreur_nbTournois.style.fontSize = "16px";
  erreur_nbTournois.style.color = "pink";
     }
  else
  {
    erreur_nbTournois.textContent=""
  }
  /* if (nombre_tournois.value !== "" && isNaN(nombre_tournois.value) == false )
 {
    return true;
 }
 else if(nombre_tournois.value == "") {
   alert('Ce champ ne peut pas être vide')
   return false;
  } else if(isNaN(nombre_tournois.value) == true){
    alert ('Vous devez entrer un nombre')
    return false;
  } */
  };

//Un bouton radio est séléctionné par défaut

document.querySelector('#location1').checked = true;



//vérification si cgu cochée
focuscgu.addEventListener("click",checkcgu);
function checkcgu()
{
 if (focuscgu.checked)
 {
  erreur_cgu.textContent="";
 }
 else
 {
  erreur_cgu.textContent="Vous devez accepter les conditions d'utilisation";
  erreur_cgu.style.fontSize = "16px";
  erreur_cgu.style.color = "pink";
 }
}
//e.preventDefault();
//} 

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





/* IDEE TROUVEE POUR SIMPLIFIER CODE JS ET MESSAGE SOUS CHAMP : 

if (constante = document.queryetc.value ===0 || constante.value.lengh<=x){
  constante erreur.textContent = "Veuillez blah blah blah"
}else{
  constante erreur.textContent ="" //vide car OK utilisateur à fait ce que demandé
}  */