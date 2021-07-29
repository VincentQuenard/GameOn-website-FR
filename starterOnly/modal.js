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
const villeNY = document.getElementById('location1');
const villeSF = document.getElementById('location1');
const villeSeattle = document.getElementById('location1');
const villeChicago = document.getElementById('location1');
const villeBoston = document.getElementById('location1');
const villePortland = document.getElementById('location1');
const erreur_ville = document.getElementById('erreur_ville');
const focuscgu = document.getElementById('checkbox1');
const erreur_cgu = document.getElementById('erreur_cgu');
const formulaire = document.getElementById('formulaire')


//Regex
const regexLettres = /^[a-zA-Z-\s]+$/;
const regNombres = /^[0-9]+$/;
const regexMessagerie = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexDateNaissance = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
/*/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;*/
// listener bouton ouverture formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fonction pour faire apparaitre le formulaire
function launchModal() {
  modalbg.style.display = "block";
}

// listener fermeture formulaire au clic sur la croix
buttonClose.addEventListener("click",closeModal);

//Fonction de fermeture formulaire au clic sur la croix
function closeModal() {
  modalbg.style.display = "none";

}
//Vérifications formulaires
//on écoute le submit    VALIDATE NE FONCTIONNE PAS..........
/*formulaire[0].addEventListener("submit", validate)
function validate(e){ */
  formulaire.addEventListener("submit", soumettre);
  function soumettre(e){
//verification champ prénom non vide

  if (prenom.value ===0 || prenom.value.length <=2)//le prénom est vide ou à moins de 2 charactères
  {erreur_prenom.textContent="Le prénom doit comporter 2 charactères minimum.";
  erreur_prenom.style.fontSize = "16px";
  erreur_prenom.style.color = "red";
}else{
  erreur_prenom.textContent="" //pas d'erreur donc pas de message
}

//verification champ nom non vide

  if (nom.value ===0 || nom.value.length <=2)//le prénom est vide ou à moins de 2 charactères
  {erreur_nom.textContent="Le nom doit comporter 2 charactères minimum."
  erreur_nom.style.fontSize = "16px";
  erreur_nom.style.color = "red";
}else{
  erreur_nom.textContent="" //pas d'erreur donc pas de message
};


//verification email valide

  if(regexMessagerie.test(messagerie.value)){// test regex ok
    erreur_messagerie.textContent ="";
    // Pas d'erreur
 
  }
  else{// Caractère absent ou ne répondant pas aux conditions du regex
    erreur_messagerie.textContent ="Veuillez entrer une adresse de messagerie valide";
    erreur_messagerie.style.fontSize = "16px";
    erreur_messagerie.style.color = "red";
      
};


//verification date de naissance valide

  if(regexDateNaissance.test(naissance.value)){// test regex ok
    erreur_naissance.textContent ="";
    // Pas d'erreur
    }
  else{// Caractère absent ou ne répondant pas aux conditions du regex
    erreur_naissance.textContent ="Veuillez entrer une date de naissance valide";
    erreur_naissance.style.fontSize = "16px";
    erreur_naissance.style.color = "red";
    
};

//verification nombre de tournois compris entre 0 et 99

 if (nombre_tournois.value === "")
  {erreur_nbTournois.textContent="Vous devez entrer un nombre dans ce champ";
  erreur_nbTournois.style.fontSize = "16px";
  erreur_nbTournois.style.color = "red";
     }
  else
  {
    erreur_nbTournois.textContent=""
  };

//Un bouton radio est séléctionné par défaut

document.querySelector('#location1').checked = true;




//vérification si cgu cochée
 if (focuscgu.checked)
 {
  erreur_cgu.textContent="";
 }
 else
 {
  erreur_cgu.textContent="Vous devez accepter les conditions d'utilisation";
  erreur_cgu.style.fontSize = "16px";
  erreur_cgu.style.color = "red"
 
}
  e.preventDefault();//bloque l'envoi si le formulaire n'est pas correctement rempli
 }
