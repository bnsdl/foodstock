function setStock() {
    var banane = {
        "Nom": "Banane",
        "Quantite": "2",
        "Poids": "100gr"
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
        "Quantite": "N/R",
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

    alert("Votre liste de course a bien été prise en compte !");
}


function ajout(){

    console.log("la");
    var produits = $('#produits').val();
    var poids = $('#poids').val();
    var codeBarre = $('#quantite').val();

    var produitInfo = {
        'Nom': produits,
        'Quantite': codeBarre,
        'Poids': poids
    };

    localStorage.setItem('test', JSON.stringify(produitInfo));

    alert("Votre produit a bien été ajouté");

    $('#produits').val("");
    $('#poids').val("");
    $('#quantite').val("");
}
