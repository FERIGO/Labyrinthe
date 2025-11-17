function shuffleArray(inputArray) {
  inputArray.sort(() => Math.random() - 0.5);
}

function incrementerCompteur() {
  clics++;
  sessionStorage.setItem('compteurClics', clics);
}

function initialiserCompteur() {
  sessionStorage.setItem('compteurClics', 0);
}
	
// Le graphe représentant le labyrinthe 	
const graphe = {
'51fp7a' : ['o2u56e', 'u51d7y', '93bse4'],
'o2u56e' : ['f44ck9', 'u51d7y', '93bse4'],
'93bse4' : ['i647rs', 'u51d7y', 'o2u56e'],
'f44ck9' : ['i647rs', 'u51d7y', 'v7k4mn'],
'u51d7y' : ['93bse4', '51fp7a', 'i647rs'],
'i647rs' : ['u51d7y', '51fp7a', 'f44ck9'],
'v7k4mn' : ['o2u56e', '182vd4', '51fp7a'],
'182vd4' : ['93bse4', 'f44ck9', 'v92cd3']
}

var adresse = window.location.pathname;
nom = adresse.substr(-11, 6);  // on récupère le nom du fichier html en cours (sans l'extension)
chemin = adresse.substr(0, adresse.length-11);  // on récupère le chemine vers le fichier html en cours

// Paramétrage des liens hypertextes dans le document html
var cibles = graphe[nom]; 
shuffleArray(cibles);
document.getElementById("porte1").href = cibles[0]+'.html';
document.getElementById("porte2").href = cibles[1]+'.html';
document.getElementById("porte3").href = cibles[2]+'.html';

// Nombre de clics 
let clics = parseInt(sessionStorage.getItem('compteurClics')) || 0;
if (clics > 6){
	alert("Vous avez dépassé le nombre de clics autorisés : retour à l'entrée du labyrinthe !");
	initialiserCompteur();
	window.location.href = chemin+'51fp7a.html';
}

