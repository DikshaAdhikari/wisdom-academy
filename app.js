// Declaring Variables
var ham = document.getElementById('ham');
var x = document.getElementById('x');
var submit = document.getElementById("send");

// on click Hamburger
ham.addEventListener('click', () => {
    ham.classList.add("hidden");
    x.classList.remove("hidden");
    // brings animation
    document.querySelector(".mobile-nav").classList.remove('hidden');
});

// on click cross
x.addEventListener('click', () => {
    x.classList.add("hidden");
    ham.classList.remove("hidden");
    document.querySelector(".mobile-nav").classList.add('hidden');
});

// on click submit
submit.addEventListener("click", () => {
    // field variables
    var name = document.getElementById("name").value;
    var emailVal = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var ques = document.getElementById("ques").value;
    var atPosition = emailVal.indexOf("@");
    var dotPosition = emailVal.lastIndexOf(".");

    // form Validation
    if (emailVal.length < 1 && phone.length < 10 && ques.length < 1 && name.length < 1) {
        alert('Fill all the enteries before submition');
    } else if (atPosition < 1 || (dotPosition - atPosition < 2)) {
        alert("Please provide a valid email address");
    } else if (isNaN(phone)) {
        alert("Please provide a phone number");
    } else {
        alert("Your Application Is Submitted");
    }
});