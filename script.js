function togglePassword() {
    var passwordField = document.getElementById("password");
    var showPasswordButton = document.getElementById("showPassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        showPasswordButton.textContent = "Hide Password";
    } else {
        passwordField.type = "password";
        showPasswordButton.textContent = "Show Password";
    }
}

// ... (reste du code) ...

function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthText = document.getElementById("strength");

    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (strongRegex.test(password)) {
        strengthText.style.color = "green";
        strengthText.innerHTML = "Strong password!";
    } else {
        strengthText.style.color = "red";
        strengthText.innerHTML = "Weak password. Please include uppercase, lowercase, numbers, and special characters.";
    }

    // Estimation du temps pour une attaque de force brute (très approximative)
    var timeToCrack = calculateTimeToCrack(password);
    console.log("Estimated time to crack: " + timeToCrack);
}

function calculateTimeToCrack(password) {
    // Supposons une attaque avec un ordinateur capable de tester 1 million de mots de passe par seconde
    var guessesPerSecond = 1e6;

    // Calculer le nombre total de combinaisons possibles (force brute)
    var totalCombinations = Math.pow(94, password.length);

    // Estimation du temps nécessaire pour essayer toutes les combinaisons
    var seconds = totalCombinations / guessesPerSecond;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;

    return days.toFixed(2) + " days";
}