<?php
session_start();
$name = $_POST['postname'];
$UID = $_POST['postUID'];
$_SESSION['UID'] = $UID; 
$_SESSION['name'] = $name; 
$_SESSION['score'] = 0; 

echo $_SESSION['name'];


?>