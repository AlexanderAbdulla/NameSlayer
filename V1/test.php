<?php
session_start();
?>

<html>
<head>
<title>Name Slayer</title>
<script type="text/javascript">
	
</script>
 <link rel="stylesheet" href="main.css">
</head>

<body>

<h1>NameSlayer</h1>

<?php
	if(!isset($_SESSION['name'])):
?>

<form id ="NameForm">
    <textarea id="Username" class="text" cols="30" rows ="1" name="UserName"></textarea>
	<br>
    <input type="submit" value="Enter User" class="submitButton">
</form>

<?php 
	else :
?>

<div id="userName"> Username: <?php echo $_SESSION['name'] ?> </div>
<div id="userScore"> Score: <?php echo $_SESSION['score'] ?> </div>

<?php endif; ?>

<div id="yourScore"> </div>
<div id="nameCanvas"> </div>

<button onclick="quit()">Quit</button>

<div id="page_container"></div>
<input type="button" onclick="randomImage()" value="click here to place random image">

<script src="https://www.gstatic.com/firebasejs/5.2.0/firebase.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="main.js"></script>
</body>
</html>