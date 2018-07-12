

$(document).ready(function(){
	
	var rootRef = firebase.database().ref().child("Users");
	
	rootRef.on("child_added", snap => {
		var name = snap.child("UserName").val(); 
		var id = snap.key;

		
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
	
	setInterval(function() {
			addPoint();
	}, 5000);
	


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

//Function to save the name in firebase 
function saveName(name) {
	var newNameRef = nameRef.push();
	newNameRef.set({
		UserName: name,
		Score: 0
	});
	
	var UID = newNameRef.getKey(); 
	//alert(UID); 
	
	//function post() {
		$.post('validate.php',  {postname:name, postUID:UID},
		function(data) 
		{
			alert(data); 
			location.reload();
		});
	//}
}

//Adds a point to your score 
function addPoint() {
	//  var nameRef = firebase.database().ref('Users');
	
	$.post('returnUID.php',  {},
		function(data) 
		{
			
			var childRef = nameRef.child(data);
			var childRefScore = childRef.child("Score");
			var score; 
			
			childRefScore.on("value", function(snapshot) {
				score = snapshot.val() + 1;
				
			});
			
			childRef.set({
				Score: score
			});
			
			
			alert(score); 
			//location.reload();
		}
		
		);
		
	//nameRef.ref(
	//alert("1 point added");
}

function quit() {
		$.post('quit.php',  {postname:name},
		function(data) 
		{
			 
			location.reload();
		});
}