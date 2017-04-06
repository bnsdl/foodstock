$(document).ready(function(){
    $( ".cross" ).hide();
    $( ".menu-perso" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".menu-perso" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".menu-perso" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });
});

