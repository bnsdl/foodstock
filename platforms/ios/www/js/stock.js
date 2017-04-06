$(document).ready(function () {
    getStock();

    if (localStorage.length === 0){
        $("#vider").hide();
    }
});

function getStock() {

    var nbElement = localStorage.length;
    var nom;
    var quantite;
    var poids;
    var content;

    if (nbElement !== 0) {
        for ( var i = 0; i < nbElement; i++ ) {
            nom = JSON.parse(localStorage.getItem(localStorage.key(i))).Nom;
            quantite = JSON.parse(localStorage.getItem(localStorage.key(i))).Quantite;
            poids = JSON.parse(localStorage.getItem(localStorage.key(i))).Poids;
            content = '<li class=" collection-item ">' + nom + ' - ' + quantite + ' - ' + poids + '</li>';
            $(content).appendTo("#stock");
        }
    }
    else {
        content = "<li>Vous n'avez pas encore renseigné d'ingrédients ! Voulez vous le faire dès à <a href='ajoutIngredient.html'>présent</a>?  </li> ";
        $(content).appendTo("#stock");
    }
}

function vider(){

    var nbElement = localStorage.length;

    for ( var i = 0; i < nbElement; i++ ) {
        localStorage.removeItem(localStorage.key(0));
    }
    window.location.replace("stock.html");
}