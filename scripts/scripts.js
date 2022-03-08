document.getElementById("nav-trigger").addEventListener("click", () => {
    document.getElementById("extended-nav").classList.remove("d-none");
});

document.getElementById("nav-close").addEventListener("click", () => {
    document.getElementById("extended-nav").classList.add("d-none");
});

function validateApplicationForm() {
    const regexZip = new RegExp("^[0-9]{5}$");
    const regexPhoneNumber = new RegExp("^(\\+\\d* )?\\d+\\s?\\d*$");
    const regexMail = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

    const zipCode = document.getElementById("zip").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (!regexZip.test(zipCode)) {
        printValidationFailureMessage("PLZ");
        return false;
    }
    if (!(regexPhoneNumber.test(phoneNumber) || regexMail.test(email))) {
        printValidationFailureMessage("Telefonnummer oder Email");
        return false;
    }
    return true;
}

function printValidationFailureMessage(element) {
    alert("Formulareingaben im Feld " + element + " sind Fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
}