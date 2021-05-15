
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCAaQgNcJaGRonvKdGp6dwAgxHDwLYFbes",
    authDomain: "practice-d738e.firebaseapp.com",
    databaseURL: "https://practice-d738e-default-rtdb.firebaseio.com",
    projectId: "practice-d738e",
    storageBucket: "practice-d738e.appspot.com",
    messagingSenderId: "1089280550760",
    appId: "1:1089280550760:web:51baf0d085d0e1799658dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name=document.getElementById("user_name").value;
      Dob=document.getElementById("Dob").value;
      My_hobby=document.getElementById("My_hobby").value;
        My_class=document.getElementById("My_class").value;
        My_section=document.getElementById("My_section").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user",
          date_of_birth:Dob,
          my_hobby:My_hobby,
          my_class:My_class,
          my_section:My_section
      });
  }