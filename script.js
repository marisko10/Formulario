
const firstName = document.getElementById("name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const general = document.getElementById("general");
const support = document.getElementById("support");
const consent = document.getElementById("consent");
const btnSubmit = document.querySelector(".buttonsubmit");



function validateFirstName() {
    const error = document.getElementById("nameError");

    if (firstName.value.trim() === "") {
        error.textContent = "This field is required.";
        firstName.style.border = "1px solid red ";
        return false;
    }

    error.textContent = "";
     firstName.style.border = "";
    return true;
}
firstName.addEventListener("blur", validateFirstName);

function validateLastName() {
    const error = document.getElementById("lastnameError");

    if (lastName.value.trim() === "") {
        error.textContent = "This field is required.";
        lastName.style.border = "1px solid red ";
        return false;
    }

    error.textContent = "";
     lastName.style.border = "";
    return true;
}


lastName.addEventListener("blur", validateLastName);



function validateEmail() {
    const error = document.getElementById("emailError");

 if (!email.value.trim().includes("@") || !email.value.trim().includes(".")) {
    error.textContent = "Please enter a valid email address.";
    email.style.border = "1px solid red ";
    return false;
}


else {
    error.textContent = "";
    email.style.border = "";
    return true;
}
    
}

email.addEventListener("blur", validateEmail);


function validateQueryType() {
    const error = document.getElementById("queryError");

    if (!general.checked && !support.checked) {
        error.textContent = "Please select a query type.";

        return false;
    }

    error.textContent = "";
    return true;
}

general.addEventListener("change", validateQueryType);
support.addEventListener("change", validateQueryType);





function validateConsent() {
    const error = document.getElementById("consentError");

    if (!consent.checked) {
        error.textContent = "You must consent before submitting.";
        return false;
    }

    error.textContent = "";
    return true;
}

consent.addEventListener("change", validateConsent);



btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    const isValid =
        validateFirstName() &
        validateLastName() &
        validateEmail() &
        validateQueryType() &
        validateConsent();

    if (isValid) {
        alert("Form submitted successfully!");
        
    }
});

    


