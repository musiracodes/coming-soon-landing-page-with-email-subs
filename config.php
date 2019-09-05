<?php

session_start();

//connect to database
$objDB = new mysqli('localhost', 'root', 'root', 'jscourse');

if($objDB->connect_errno){
    die('Connection failed');
}

require_once 'PHPMailer-master/PHPMailerAutoload.php';

require_once 'send_mail.php';