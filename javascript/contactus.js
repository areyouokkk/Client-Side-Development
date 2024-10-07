$(document).ready(function() {

 // Input validation styling
 $('input, textarea').on('input', function() {
    if (!this.checkValidity()) {
        $(this).css('border-color', '#ff5c5c');
    } else {
        $(this).css('border-color', 'rgb(0, 194, 0)');
    }
});

 // Checks if there is stored data in localStorage
 var storedData = JSON.parse(localStorage.getItem('userData'));
 // If there is stored data it will fill the form fields
 if (storedData) {
     $('#name').val(storedData.firstName);
     $('#lastname').val(storedData.lastName);
     $('#email').val(storedData.email);
 }

 // character counting
 $('#message').on('input', function() {
     var currentLength = $(this).val().length;
     var maxLength = $(this).attr('maxlength');
     $('#charCount').text(currentLength + ' / ' + maxLength);
 });

 // Form submission handling
 $('#contactForm').submit(function(event) {
     event.preventDefault(); 

     // Collect data from the form
     var userData = {
         firstName: $('#name').val(),
         lastName: $('#lastname').val(),
         email: $('#email').val(),
         message: $('#message').val()
     };

     // Store data in local storage
     localStorage.setItem('userData', JSON.stringify(userData));

    //  console.log('Stored in Local Storage:', JSON.parse(localStorage.getItem('userData')));

     // Update the text of the spans to the user's entered data
     $('#greetingName').text(userData.firstName); 
     $('#userName').text(userData.firstName);  
     $('#userLastName').text(userData.lastName);  
     $('#userEmail').text(userData.email); 

     // Hide the form
     $(this).hide();

     // Show the thank you message
     $('#thankYouMessage').show();
 });

});