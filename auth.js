var firebaseConfig = {
    apiKey: "AIzaSyDLnskZWoby4tNpCcZ2QB814x8ZU7FH4Qg",
    authDomain: "firstwebapp-6032d.firebaseapp.com",
    projectId: "firstwebapp-6032d",
    storageBucket: "firstwebapp-6032d.appspot.com",
    messagingSenderId: "51541819873",
    appId: "1:51541819873:web:39d06793b2c3f4218892a0",
    measurementId: "G-H3PB9XYQJ8"
  };

firebase.initializeApp(firebaseConfig);


  function signUp(){
  	var email = document.getElementById('signUpEmail').value;
  	var pass = document.getElementById('signUpPass').value;
	var regMsg = document.getElementById('regMsg');

  	firebase.auth().createUserWithEmailAndPassword(email, pass)
  	.then(
  		function(response){
  			regMsg.innerHTML = "Account is created!";
  			console.log(response);
  			sendVerificationEmail();
  			window.location.replace("auth.html")
  	})
  	.catch(function(error){
  		alert("Failed to save details " + error);
  		console.log(error);
  		location.reload;
  	})
  };


  function sendVerificationEmail(){
  	firebase.auth().currentUser.sendEmailVerification()
  	.then(function(response){
  		console.log(response);
  		alert("Verification code sent!");
  	})
  	.catch(function(error){
  		console.log(error);
  		alert("Failed to send verification " + error);
  	})
  };


  function logIn(){
  	var logInEmail = document.getElementById("loginEmail").value;
  	var logInPass = document.getElementById("loginPass").value;
	var msg = document.getElementById('message');

  	firebase.auth().signInWithEmailAndPassword(logInEmail, logInPass)
  	.then(function(response){
  		console.log(response);
  		msg.innerHTML = "Your account is verified!";
  		window.location.replace("weather1.html")
  	})
  	.catch(function(error){
  		var errorCode = error.code;
  		if (errorCode == "auth/wrong-password"){
  			msg.innerHTML = "Wrong password entry";
  			location.reload;
  		} else{
  			alert(error);
  		}
  		location.reload;
  	})
  };


  function reset(){
  	var loginEmail = document.getElementById("loginEmail").value;

  	firebase.auth().sendPasswordResetEmail(loginEmail)
  	.then(function(response){
  		console.log(response);
  		alert("Check email for reset link")
  	})
  	.catch(function(error){
  		console.log(error);
  		alert("Reset link not sent! " + error);
  	})
  };


  function logOut(){
  	firebase.auth().signOut().then(response => {
  		console.log(response);
  		alert("Logged Out :)")
  		window.location.replace("index.html")
  	})
  	.catch(error => {
  		console.log(error);
  		alert("Logout process failed " + error)
  	})
  };