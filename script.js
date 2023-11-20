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



function calculateTimeToCrack(password) {
    // Supposons une attaque avec un ordinateur capable de tester 1 million de mots de passe par seconde
    var guessesPerSecond = 100;

    // Calculer le nombre total de combinaisons possibles (force brute)
    var totalCombinations = Math.pow(94, password.length);

    // Estimation du temps nécessaire pour essayer toutes les combinaisons
    var seconds = totalCombinations / guessesPerSecond;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;

    return days.toFixed(2) + " days";
}
function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthText = document.getElementById("strength");

    var lengthScore = calculateLengthScore(password.length);
    var characterScore = calculateCharacterScore(password);

    var totalScore = lengthScore + characterScore;

    displayStrength(totalScore);
}

function calculateLengthScore(length) {
    if (length < 8) {
        return 1; // Très faible
    } else if (length <= 8) {
        return 2; // Faible
    } else if (length <= 10) {
        return 3; // Bon
    } else if (length <= 12) {
        return 4; // Très bon
    } else if (length <= 14) {
        return 5; // Incroyable
    } else if (length <= 18) {
        return 6; // Insane
    } else if (length <= 20) {
        return 7; // Monstrueux
    } else {
        return 8; // Indétectable
    }
}

function calculateCharacterScore(password) {
    var regexLowerCase = /[a-z]/;
    var regexUpperCase = /[A-Z]/;
    var regexNumbers = /[0-9]/;
    var regexSpecialChars = /[!@#\$%\^&\*]/;

    var characterScore = 0;

    if (regexLowerCase.test(password)) {
        characterScore++;
    }

    if (regexUpperCase.test(password)) {
        characterScore++;
    }

    if (regexNumbers.test(password)) {
        characterScore++;
    }

    if (regexSpecialChars.test(password)) {
        characterScore++;
    }

    return characterScore;
}

function displayStrength(score) {
    var strengthText = document.getElementById("strength");

    switch (score) {
        case 1:
            strengthText.style.color = "red";
            strengthText.innerHTML = "Très faible";
            break;
        case 2:
            strengthText.style.color = "orange";
            strengthText.innerHTML = "Faible";
            break;
        case 3:
            strengthText.style.color = "yellow";
            strengthText.innerHTML = "Bon";
            break;
        case 4:
            strengthText.style.color = "lightgreen";
            strengthText.innerHTML = "Très bon";
            break;
        case 5:
            strengthText.style.color = "green";
            strengthText.innerHTML = "Incroyable";
            break;
        case 6:
            strengthText.style.color = "blue";
            strengthText.innerHTML = "Insane";
            break;
        case 7:
            strengthText.style.color = "purple";
            strengthText.innerHTML = "Monstrueux";
            break;
        case 8:
            strengthText.style.color = "black";
            strengthText.innerHTML = "Indétectable";
            break;
    }
}
