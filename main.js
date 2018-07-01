
$(document).ready(function(){
	var rootRef = firebase.database().ref().child("Users");
	
	rootRef.on("child_added", snap => {
		var name = snap.child("UserName").val(); 
		var id = snap.key;

		
		//var c = document.getElementById("nameCanvas"); 
		//var ctx = c.getContext("2d");
		//ctx.font = "20px Arial";
		//var height = Math.floor((Math.random() * 200) + 1);
		//var width = Math.floor((Math.random() * 400) + 1);
		//ctx.strokeText(name, width, height); 
		var rand = Math.floor((Math.random() * 2) + 1);
		var nameNode = document.createElement("p"); 
		var node = document.createTextNode(name); 
		nameNode.appendChild(node);
		nameNode.onclick = function() { 
				console.log(name)
				console.log(id);
				rootRef.child(id).remove();
				location.reload();
				
		};
		var element = document.getElementById("nameCanvas");
		if(rand == 1) {
			element.append(nameNode); 
		} else {
			element.prepend(nameNode); 
		}
		
	});
	
	
});

//initialize firebase
  var config = {
    apiKey: "AIzaSyDtoWpAbTjgOeQTuE7asd1gU-GgZtSxKJs",
    authDomain: "nameslayer-cbf5c.firebaseapp.com",
    databaseURL: "https://nameslayer-cbf5c.firebaseio.com",
    projectId: "nameslayer-cbf5c",
    storageBucket: "nameslayer-cbf5c.appspot.com",
    messagingSenderId: "419578402637"
  };
  firebase.initializeApp(config);

  
  var nameRef = firebase.database().ref('Users'); 

  //Listen for form submit 
document.getElementById('NameForm').addEventListener('submit', submitForm);

function submitForm(e){ 
	e.preventDefault();
	var name = getInputVal("Username");
	saveName(name); 
}

// Function get get form values 
function getInputVal(id) {
	return document.getElementById(id).value; 
}

function saveName(name) {
	var newNameRef = nameRef.push();
	newNameRef.set({
		UserName: name
	});
}