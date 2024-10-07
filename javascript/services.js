
$(document).ready(function() {

    // Initialize event handlers for each section
    ['cyber', 'network', 'it'].forEach(initializeSection);
});


function formValidation(sectionId) {
      // Input validation feedback
      $('input, textarea').on('input', function() {
        if (!this.checkValidity()) {
            $(this).css('border-color', '#ff5c5c');
        } else {
            $(this).css('border-color', 'rgb(0, 194, 0)');
        }
    });
    
}
function initializeSection(sectionId) {
    // Toggle form on button click
    $(`#requestCallbackBtn-${sectionId}`).click(function() {
        if ($(`#callbackForm-${sectionId} form`).length === 0) { // Checks if form doesnt already exist
            var formHtml = createFormHtml(sectionId);
            $(`#callbackForm-${sectionId}`).html(formHtml);
            DateAndTimePickers(sectionId);
            formValidation(sectionId);
    
        }

        $(`#callbackForm-${sectionId}`).hide();
       

        // transition
        $(`#rqst-card-${sectionId}`).fadeOut(500, function() {
        $(`#callbackForm-${sectionId}`).fadeIn(500); 
    });
});
    // Handle form submission
    $(document).on('submit', `#callbackForm-${sectionId} form`, function(event) {
        
        event.preventDefault();
        processFormSubmission(sectionId);
    });
}

function createFormHtml(sectionId) { 

    return `
        <form action="#" method="post" class="callBackFormStyle" autocomplete="on">
            <p class="note-size"><span class="asterisk">*</span> indicates a required field.</p>
            <label class="form-label" for="name-${sectionId}"><span class="asterisk">*</span> Name</label>
            <input type="text" id="name-${sectionId}" name="name" class="form-input" placeholder="Enter your name" minlength="1" maxlength="100" pattern="[a-zA-Z ]+" required title="Please enter letters and spaces only">
            <label class="form-label" for="phone-${sectionId}"><span class="asterisk">*</span> Phone Number</label>
            <input type="tel" id="phone-${sectionId}" name="phone" class="form-input" placeholder="Enter your phone number" pattern="\\d{7,15}" required title="Please enter a 7 to 15 digit phone number">
            <label class="form-label" for="datepicker-${sectionId}"><span class="asterisk">*</span> Date</label>
            <input type="text" id="datepicker-${sectionId}" name="datepicker" class="form-input datepicker" required>
            <label class="form-label" for="timepicker-${sectionId}"><span class="asterisk">*</span> Time</label>
            <input type="text" id="timepicker-${sectionId}" name="timepicker" class="form-input timepicker" required>
            <button type="submit" class="form-button">Submit</button>
        </form>
    `;
}

function DateAndTimePickers(sectionId) {
    $(`#datepicker-${sectionId}`).datepicker({
        beforeShowDay: $.datepicker.noWeekends,
        minDate: 0,
        dateFormat: 'yy-mm-dd',
        defaultDate: new Date()
    });
    $(`#timepicker-${sectionId}`).timepicker({
        timeFormat: 'h:mm p',
        interval: 15,
        minTime: '8',
        maxTime: '5:30pm',
        defaultTime: '08:00',
        startTime: '08:00',
        dynamic: true,
        dropdown: true,
        scrollbar: true
    });
}

function processFormSubmission(sectionId) {
    var callbackData = {
        name: $(`#name-${sectionId}`).val(),
        phone: $(`#phone-${sectionId}`).val(),
        date: $(`#datepicker-${sectionId}`).val(),
        time: $(`#timepicker-${sectionId}`).val()
    };

    localStorage.setItem(`callbackData-${sectionId}`, JSON.stringify(callbackData));

   

    var confirmationMessage = `
        <h1>Thank you, ${callbackData.name}!</h1>
        <p>We have received your inquiry. We will contact you on:</p>
        <div class="customer-details">
        <p><strong>📅Date:</strong> ${callbackData.date}</p>
        <p><strong>⏰Time:</strong> ${callbackData.time}</p>
        <p><strong>📞Phone:</strong> ${callbackData.phone}</p>
        </div>
        <p>We look forward to speaking with you soon!</p>
    `;

    $(`#confirmationMessage-${sectionId}`).hide();

   // fades out form, then fades in confirmation message
   $(`#callbackForm-${sectionId}`).fadeOut(500, function() {
    // after form is hidden, sets the confirmation message
        $(`#confirmationMessage-${sectionId}`).html(confirmationMessage);
        //fades in confirmation message
        $(`#confirmationMessage-${sectionId}`).fadeIn(500);
    });
}


