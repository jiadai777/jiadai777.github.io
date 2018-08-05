// Initialize Firebase
var config = {
	apiKey: "AIzaSyC5e6ClYqt4dZt0REXOtKXp7-Jh0mMyBtk",
	authDomain: "contact-form-1e8e8.firebaseapp.com",
	databaseURL: "https://contact-form-1e8e8.firebaseio.com",
	projectId: "contact-form-1e8e8",
	storageBucket: "contact-form-1e8e8.appspot.com",
	messagingSenderId: "1067218009073"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submission
document.getElementById('contact').addEventListener('submit', submitForm);

function submitForm(e){
	e.preventDefault();

	//get values
	var name = getInputVal('name');
	var company = getInputVal('company');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');

	//Save Message
	saveMessage(name, company,email, phone, message);

	// Show alert
	document.querySelector('.alert').style.display = 'block';

	//Hide alert after 3 seconds
	setTimeout(function(){
		document.querySelector('.alert').style.display = 'none';
	}, 3000);

	document.getElementById('contact').reset();
}

// function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, company, email, phone, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	});
}