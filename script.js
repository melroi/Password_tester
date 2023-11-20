function togglePassword() {
    var passwordField = document.getElementById("password");
    var showPasswordCheckbox = document.getElementById("showPassword");

    if (showPasswordCheckbox.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Reste du code inchangé...

function calculateTimeToCrack(password) {
    var timeToCrack = calculateTimeToCrackValue(password);
    var displayStrength = document.getElementById("displayStrength");

    displayStrength.innerHTML = "Estimated time to crack: " + timeToCrack;
}

function calculateTimeToCrackValue(password) {
    var guessesPerSecond = 1e3;
    var lengthFactor = Math.pow(password.length, 2);
    var featuresFactor = 1;

    if (/[A-Z]/.test(password)) {
        featuresFactor *= 26;
    }

    if (/[0-9]/.test(password)) {
        featuresFactor *= 10;
    }

    if (/[!@#\$%\^&\*]/.test(password)) {
        featuresFactor *= 10;
    }

    var totalCombinations = lengthFactor * featuresFactor;
    var seconds = totalCombinations / guessesPerSecond;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;

    return days.toFixed(2);  // Ne pas ajouter " days" ici
}

// Reste du code inchangé...

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
        return 1;
    } else if (length <= 8) {
        return 2;
    } else if (length <= 10) {
        return 3;
    } else if (length <= 12) {
        return 4;
    } else if (length <= 14) {
        return 5;
    } else if (length <= 18) {
        return 6;
    } else if (length <= 20) {
        return 7;
    } else {
        return 8;
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
