//LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCNgOgwfQIUMbB05EjKbkeUFxHk2BoCfNc",
    authDomain: "vamosconversar-39e61.firebaseapp.com",
    databaseURL: "https://vamosconversar-39e61-default-rtdb.firebaseio.com",
    projectId: "vamosconversar-39e61",
    storageBucket: "vamosconversar-39e61.appspot.com",
    messagingSenderId: "525426695939",
    appId: "1:525426695939:web:ec56af919b85eab5fa9336"
  };


  firebase.initializeApp(firebaseConfig); 
  user_name = localStorage.getItem("user_name"); 
  room_name = localStorage.getItem("room_name");


  
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
          name:userName,
          message:msg,
          like:0
      });
  
  document.getElementById("msg").value = "";
  }
//Fim do código
      } });  }); }
getData();


	
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
              console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
             like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag +like_button + span_with_tag;       
   document.getElementById("output").innerHTML += row;

} }); }); }


function updateLike(messageId)
{
    console.log("botão like pressionado - " + messageId);
    button_id = messageId;
    likes = document.getElementById(button_id).value;
    updateLikes = Number(likes) + 1;
    console.log(updateLikes);

firebase.database().ref(roomName).child(messageId).update({
});
}


function logout()
{
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location = "index.html";

}
