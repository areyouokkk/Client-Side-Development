$(document).ready(function() {

    const containers = document.querySelectorAll(".headings-style");

    window.addEventListener("scroll",checkBoxes);

    checkBoxes();

    function checkBoxes() {
        const triggerBottom = window.innerHeight / 5 * 5;

        containers.forEach(container=>{
            const containerTop = container.getBoundingClientRect().top;

            if(containerTop < triggerBottom) {
                container.classList.add("show");
            } else {
                container.classList.remove("show")
            }
        })
    }

    // function deleteCookie(cname) {
    //     // Set the cookie with an expiry date in the past
    //     document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    // }
    
    // deleteCookie("username");


    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    
      
    function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }
      
      function checkCookie() {
        let user = getCookie("username");
    
        if (sessionStorage.getItem("alerted") === "yes") {
            return;
        }
    
        if (user !== "") {
            $('.welcome-message').text("Welcome back " + user + "!").show();
            sessionStorage.setItem("alerted", "yes");
        } else {
            var storedData = JSON.parse(localStorage.getItem('userData'));
            if (storedData && storedData.firstName) {
                setCookie("username", storedData.firstName, 365);
                $('.welcome-message').text("Welcome " + storedData.firstName).show();
                sessionStorage.setItem("alerted", "yes");
            }
        }
    }
    
    checkCookie();
      

});




