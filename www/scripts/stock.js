$(document).ready(function () {
    $.getJSON('json/produits.json',function(data){
        $('#stock').append('Nom produit: ' + data.Nom + '');
        $('#stock').append('Quantité : ' + data.Quantite + '<br>');
        $('#stock').append('Poids : ' + data.Poids + '<br>');
    });
});