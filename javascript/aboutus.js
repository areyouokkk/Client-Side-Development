$(document).ready(function() {

    $(".hidden-p,#hide-bttn").hide();

    // toggle sections in about us page
    $(".read-more-bttn").click(function(){
        $(".hidden-p,#hide-bttn").fadeToggle(500);

        if ($(this).text() === "Read More") {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }

    });
    // end

    
    // Selects all buttons with the class 'enquiry-bttn'
    document.querySelectorAll('.enquiry-bttn').forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = 'contactus.html'; 
        });
    });

});