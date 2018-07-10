<?php
session_start();
$name = $_POST['postname'];
$_SESSION['name'] = $name; 

echo $_SESSION['name'];


?>