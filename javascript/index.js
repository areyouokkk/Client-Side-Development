$(document).ready(function() {
    // enquiry button
    $("#enquiry-bttn").on('click', function() {
        window.location.href = 'contactus.html';
    });

    // learn more buttons
    $('.learn-bttn').on('click', function() {
        window.location.href = 'services.html';
    });



    // swapping images top of the page
    var images = ["images/protection.png", "images/connection.png", "images/innovation.png"];
    var i = 0;
    var time = 4000;

    // Image swap function
    function swapImage() {
        $('img[name="swap"]').attr('src', images[i]);
        i = (i + 1) % images.length;
        setTimeout(swapImage, time);
    }

    // start image swap
    swapImage();


    // text swapping top of the page
    var textIndex = 0;
    var texts = [
        "Securing Your Digital World, One Click at a Time",
        "Connect More, Worry Less: Network Solutions That Work.",
        "Innovate, Implement, Inspire: IT Solutions for Tomorrow’s Business"
    ];
    var textSwapInterval = 4000;

    function swapText() {
        // Change the text
        $('.moto-text').text(texts[textIndex]);

        textIndex = (textIndex + 1) % texts.length;
        setTimeout(swapText, textSwapInterval);
    }

    // start text swap
    swapText();


     // text swapping , testimonials
    var textIndex2 = 0;
    var texts2 = [
        "<h1>Company: Apex Manufacturing</h1><p>Partnering with BlueNetwork for our cybersecurity needs was a game-changer. Their penetration testing and vulnerability assessments helped us strengthen our network defenses immensely. We now operate with greater confidence, knowing our data is secure.</p>",
        "<h1>Company: CityWide Real Estate</h1><p>BlueNetwork's expertise in network architecture and SD-WAN solutions has significantly enhanced our connectivity and system reliability. Their tailored approach resulted in improved efficiency and a scalable network that grows with us.</p>",
        "<h1>Company: GreenGro Agricultural Co.</h1><p>We relied on BlueNetwork for a complete overhaul of our IT infrastructure. Their cloud migration and IT support services not only streamlined our operations but also boosted our productivity. Truly outstanding partnership!</p>"
    ];
    var textSwapInterval2 = 5000;

    function swapText2() {
        // Change the text
        $('.testimonial-text').html(texts2[textIndex2]);

        textIndex2 = (textIndex2 + 1) % texts2.length;
        setTimeout(swapText2, textSwapInterval2); // Corrected function name in setTimeout
    }

    // Start text swap
    swapText2();

    
});
