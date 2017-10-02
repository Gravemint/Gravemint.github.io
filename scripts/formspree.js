$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/gravemint@outlook.com", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, I\'ll be in touch promptly.');
    return false;
});