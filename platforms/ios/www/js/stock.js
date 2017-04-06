$(document).ready(function () {
    setStock();
    getStock();

});

function setStock() {
    var banane = {
        "Nom": "Banane",
        "Quantite": "2",
        "Poids": ""
    };
    var pate = {
        "Nom": "Pâtes",
        "Quantite": "3",
        "Poids": "500gr"
    };
    var farine = {
        "Nom": "Farine",
        "Quantite": "1",
        "Poids":"500g"
    };
    var jambon = {
        "Nom": "Jambon",
        "Quantite": "2",
        "Poids": "90g"
    };
    var sauceTomate = {
        "Nom": "Sauce tomate",
        "Quantite": "1",
        "Poids": "500g"
    };
    var fromageRape = {
        "Nom": "fromage râpé",
        "Quantite": "1",
        "Poids": "350g"
    };
    var champignon = {
        "Nom": "champignon de paris",
        "Quantite": "4",
        "Poids": ""
    };
    var olive = {
        "Nom": "Olives noires",
        "Quantite": "",
        "Poids": "50g"
    };
    var pateAPizza = {
        "Nom": "Pâte à pizza",
        "Quantite": "1",
        "Poids": "260g"
    };


    localStorage.setItem("banane", JSON.stringify(banane));
    localStorage.setItem("pate", JSON.stringify(pate));
    localStorage.setItem("farine", JSON.stringify(farine));
    localStorage.setItem("jambon", JSON.stringify(jambon));
    localStorage.setItem("sauceTomate", JSON.stringify(sauceTomate));
    localStorage.setItem("fromageRape", JSON.stringify(fromageRape));
    localStorage.setItem("champignon", JSON.stringify(champignon));
    localStorage.setItem("olive", JSON.stringify(olive));
    localStorage.setItem("pateAPizza", JSON.stringify(pateAPizza));
}

function getStock() {

    var nbElement = localStorage.length;
    var nom;
    var quantite;
    var poids;
    var content;

    for ( var i = 0; i < nbElement; i++ ) {
        nom = JSON.parse(localStorage.getItem(localStorage.key(i))).Nom;
        quantite = JSON.parse(localStorage.getItem(localStorage.key(i))).Quantite;
        poids = JSON.parse(localStorage.getItem(localStorage.key(i))).Poids;
        content = '<li class=" collection-item ">' + nom + ' - ' + quantite + ' - ' + poids + '</li>';
        $(content).appendTo("#stock");
    }
}