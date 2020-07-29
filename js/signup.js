function signup_validate() {
    var email = document.getElementById('signup-email').value;
    var password1 = document.getElementById('signup-psswd1').value;
    var password2 = document.getElementById('signup-psswd2').value;

    if(!email) {
        document.getElementById('signup-email-err').style.display = "block";
        document.getElementById('signup-email-err').innerHTML = "Please enter an E-mail!";
    }

    console.log(email);
    console.log("validation");
}

function clear_error(val) {
    document.getElementById(val).style.display = "none";
}