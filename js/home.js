$(document).ready(function () {
var name = $('#name-form-js');
var email = $('#inputEmail-js');
var password = $('#inputPassword-js');
var signIn = $('.signIn-js');
console.log(name);
console.log(email);
console.log(password);
console.log(signIn);
name.on('input' , function (event) {
  console.log($(this).val());
  console.log(hola)
})

//variables verificadoras booleanas :
var verifyName = false;
var verifyEmail = false;
var verifyPassword = false;
var verifyCheck = false;

// console.log($password)
email.on('input', function (event) {
// console.log($(this).val);
 var patternEmail =  /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
// console.log(patternEmail.test($(this).val()));
if(patternEmail.test($(this).val())) {    
    verifyEmail= true;
    activeButton();
} else {
    verifyEmail = false
    desactiveButton()
}
});

password.on('input' , function () {
    if($(this).val().length >=6) {
       verifyPassword = true;
       activeButton()
    } else {
        verifyPassword = false;
        desactiveButton();
    }
    console.log($(this).val())
});

/*
$checkbox.on('click' , function (event) {
    if(event.target.checked) {
        verifyCheck = true;
        activeButton();
    } else {
        verifyCheck = false;
        desactiveButton();
    }
}); */

$submit.on('click' , function(event) {
    event.preventDefault();
    localStorage.name = name.val();
    localStorage.email = email.val();
    localStorage.password = password.val();
    window.location.href  = '../views/login.html'
})

});