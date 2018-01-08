$(document).ready(function () {
var name = $('#name-form-js');
var email = $('#inputEmail-js');
var password = $('#inputPassword-js');
var signUp = $('.signUp-js');
console.log(name);
console.log(email);
console.log(password);
console.log(signUp);

//variables verificadoras booleanas :
var verifyName = false;
var verifyEmail = false;
var verifyPassword = false;
var verifyCheck = false;


name.on('input' , function (event) {
  console.log($(this).val());
  var patternName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  if(patternName.test($(this).val())) {  
    console.log('el nombre es valido')  
    verifyName= true;
  //  activeButton();
} else {
    console.log('el nombre es invalido')
    verifyName = false
   // desactiveButton()
}
 // console.log(hola)
});



// console.log($password)
email.on('input', function (event) {
// console.log($(this).val);
 var patternEmail =  /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
// console.log(patternEmail.test($(this).val()));
if(patternEmail.test($(this).val())) {  
    console.log('el correo es valido')  
    verifyEmail= true;
  //  activeButton();
} else {
    console.log('el correo es invalido')
    verifyEmail = false
   // desactiveButton()
}
});

password.on('input' , function () {
    if($(this).val().length >= 6) {
        console.log('contraseña valida')
       verifyPassword = true;
     //  activeButton()
    } else {
        console.log('contraseña invalida')
        verifyPassword = false;
     //   desactiveButton();
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
}); 

signUp.on('click' , function(event) {
    event.preventDefault();
    localStorage.name = name.val();
    localStorage.email = email.val();
    localStorage.password = password.val();
  //  window.location.href  = '../views/login.html'
})
*/

// Aqui indicar que se puede implementar la función como variable
function activeButton() {
    if (validateEmail && validatePassword && validateChecked) {
      $('form > button').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('form > button').attr('disabled', 'disabled');
  } 

});