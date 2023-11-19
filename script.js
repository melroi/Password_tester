function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthText = document.getElementById("strength");

    // Add your password strength criteria here
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (strongRegex.test(password)) {
        strengthText.style.color = "green";
        strengthText.innerHTML = "Strong password!";
    } else {
        strengthText.style.color = "red";
        strengthText.innerHTML = "Weak password. Please include uppercase, lowercase, numbers, and special characters.";
    }
}
