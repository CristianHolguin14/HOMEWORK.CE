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


   var datos ={
    name: $('.name').val(),
    apellido: $('.apellido').val(),
    number: $('.number').val(),
    genero: $('.genero').val(),
    dep: $('.dep').val(),
    ciu: $('.ciu').val(),
    des: $('.des').val(), 
    tipo: $('.tipo').val(),
  };  


    database.ref('homeworkce-e9008').push(datos);

