//when the page is ready
$(document).ready(function() {

  //when the contact form button is clicked
  $("#contact-submit").click(function(e) {
    //prevent default actions when pressing button
    e.preventDefault();
    
    //change the contact button text
    $("#contact-submit").text("Submitting..");
  
    //HTTP POST REQUEST to Formspree
    $.ajax({
      url: "https://formspree.io/gravemint@outlook.com", 
      method: "POST",
      data: $('#contact-form').serialize(), //takes all items in form
      dataType: "json" // the data structure type
    })
    //if it is successful
    .success(function(e){
      //where you want the redirect to go
      window.location.replace("/thankyou.html");
    })
    //reset the submit button if the submission fails
    .error(function(e){ $("#contact-submit").text("Submit"); });

  });
});