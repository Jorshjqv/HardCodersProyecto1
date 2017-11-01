<?php
require_once '../login_handler/login_handler.php';
session_start();
$resultArray = array();
$resultArray[] = $_SESSION["loggedInUserEmail"];
$resultArray[] = $_SESSION["loggedInUserType"];
echo json_encode($resultArray);
?>
