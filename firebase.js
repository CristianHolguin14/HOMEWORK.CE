// Initialize Firebase
  var config = {
    apiKey: "AIzaSyClhlxMkx7r6Ph0B7o_Y0iaNvzS2Rqjt78",
    authDomain: "homeworkce-e9008.firebaseapp.com",
    databaseURL: "https://homeworkce-e9008.firebaseio.com",
    projectId: "homeworkce-e9008",
    storageBucket: "homeworkce-e9008.appspot.com",
    messagingSenderId: "1077796373586"
  };
  firebase.initializeApp(config);
  const database = firebase.database();

$('.button').on('click', function( event ){
  event.preventDefault();

  var data = {
    password:$('.password').val(),
    email:$('.email').val(),
    name:$('.name').val(),
    apellido:$('.apellido').val(),
    cel:$('.cel').val(),
    number:$('.number').val(),
    genero:$('.genero').val(),
    dep:$('.dep').val(),
    doc:$('.doc').val(),
    ciu:$('.ciu').val(),
    des:$('.des').val(),
    nombre:$('.nombre').val(),
    apellid:$('.apellid').val(),
    numero:$('.numero').val(),
    nickname:$('.nickname').val(),
    apelli:$('.apelli').val(),
    numbero:$('.numbero').val(),
    user:$('.user').val()
  }; 
  console.log(data);
  database.ref('/usuarios/').push(data, function(error) {
    if (error) { throw error; }
    else {
      console.info ('guardamos la información');
      location.href="Adentro.html"
    };
  });
}); 
