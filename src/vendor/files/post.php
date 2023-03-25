<?php
// ----------------------------конфигурация-------------------------- // 

$path = "emulate/";

//---------------------------------------------------------------------- // 

$firstname = htmlspecialchars($_POST['FirstName']);

$lastname = htmlspecialchars($_POST['LastName']);

$nationality = htmlspecialchars($_POST['Nationality']);  

$email = htmlspecialchars($_POST['EMail']);

$day = htmlspecialchars($_POST['Day']);

$month = htmlspecialchars($_POST['Month']);

$year = htmlspecialchars($_POST['Year']);

$gender = htmlspecialchars($_POST['Gender']);

$password = htmlspecialchars($_POST['Password']);

$confirmpassword = htmlspecialchars($_POST['ConfirmPassword']);

//---------------------------------------------------------------------- // 

if ($email == "admin@seti.net")
{
  global $path;
  $path .= "server-error";
} else {
	global $path;
	$path .= "server-ok";
}

$path .= ".json";
$json = file_get_contents($path);

echo $json;
?>