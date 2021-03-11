var fields = {}
document.addEventListener("DOMContentLoaded", function() {
    fields.userName = document.getElementById('userName');
    fields.email = document.getElementById('email');
    fields.email = document.getElementById('subject');
    fields.message = document.getElementById('message');
   })
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }
function isEmail(email) {
    let regex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
    return regex.test(String(email).toLowerCase());
}
function fieldValidation(field, validationFunction) {
    if (field == null) return false;
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.classname = '';
    }
    return isFieldValid
}
function isValid() {
    var valid = true;
    valid &= fieldValidation(fields.userName, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.subject, isNotEmpty);
    valid &= fieldValidation(fields.message, isNotEmpty);
    return valid;
}
class User {
    constructor(userName, email, question) {
        this.userName = userName;
        this.email = email;
        this.subject = subject;
        this.question = question;
    }
}
function sendContact() {
    if (isValid()) {
        let usr = new User(userName.value, email.value);
        alert(`${usr.firstName} thanks for your message. Lookfar Camera will be in touch soon!`)
    } else {
        alert(`Please fill out all forms.`)
    }
}