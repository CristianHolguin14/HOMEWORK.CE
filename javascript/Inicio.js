jQuery(document).ready(function($){
  
  $('.login').on(
    'submit',
    function(e){
      e.preventDefault();

      var email = $('.login .email').val();
      var password = $('.login .password').val();

      if (!email){
        alert('debe ingresar email');
      }else if(!password){
        alert('debe ingresar contraseña.');
      }else {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(){
          alert('bienvenido');
          location.href="Adentro.html";
        })
        .catch(function(error) {
          alert('no eres bienvenido');

        });
      }
    });

});
