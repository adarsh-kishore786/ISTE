function validateName() {
    let x = document.forms["form"]["name"].value;
    if (x === "") {
        alert("Name must be filled out.");
        return false;
    }
    return true;
}

function validateDob() {
    let x = document.forms["form"]["dob"].value;
    if (x === "") {
        alert("Date of birth must be filled out.");
        return false;
    }

    let regex = /[0-3][0-9]-[0-1][0-9]-[0-9]{4}/;
    if (!regex.test(x)) {
        alert("Date of bith is not in valid format.");
        return false;
    }
    return true;
}

function validateEmail() {
    let x = document.forms["form"]["email"].value;
    if (x === "") {
        alert("Email must be filled out.");
        return false;
    }

    let regex = /^[a-zA-Z0-9]+\.[a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]{3}/;
    if (!regex.test(x)) {
        alert("Not a valid email.");
        return false;
    }
    return true;
}

function validateNumber() {
    let x = document.forms["form"]["number"].value;
    if (x === "") {
        alert("Contact number must be filled out.");
        return false;
    }

    let regex = /^[+]91-[0-9]{10}/;

    if (!regex.test(x)) {
        alert("Not a valid phone number.");
        return false;
    }
    return true;
}

function validateGenre() {
    let x = document.forms["form"]["genre"].value;
    if (x === "") {
        alert("Music genre must be filled out.");
        return false;
    }
    return true;
}

function validateForm() {
    if (!validateName())
        return false;
    if (!validateDob())
        return false;
    if (!validateEmail())
        return false;
    if (!validateNumber())
        return false;
    if (!validateGenre())
        return false;

    return true;
}

let form = document.getElementById("submit-form");
form.onsubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        let str = "Validations Passed!\n";
        str += "Name: " + document.forms["form"]["name"].value + "\n";
        str += "Date of birth: " + document.forms["form"]["dob"].value + "\n";
        str += "Email: " + document.forms["form"]["email"].value + "\n";
        str += "Contact number: " + document.forms["form"]["number"].value + "\n";
        str += "Genre: " + document.forms["form"]["genre"].value + "\n";
        alert(str);
    }
}
