<?php 

require_once 'config.php';

//Check the if the subscribe button clicked or set
if(isset($_POST['subscribe'])){

    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    
    $result = $objDB->query("SELECT * FROM subscribers WHERE email = '$email'");
    
    if($result->num_rows){
       $_SESSION['msg'] = 'Hi! Email already exists';
    }else{
        
        $code = md5(crypt(rand(), 'aa'));
        
        $objDB->query("INSERT INTO subscribers (email, reset_code) VALUES ('$email', '$code')");

        $_SESSION['msg'] = 'Please, check your email to get free ebook.';
        
        $message = "Hi! You just subscribed for our ebook. In order to get that you need to verify your email. Please, verify by clicking <a href='http://localhost/jscourse/verify_email.php?code=$code'>here</a>.";

         send_mail([
             'to' => $email,
             'from' => 'Creative Tools',
             'message' => $message,
             'subject' => 'Verify Email'
         ]);
    }
    
    header('Location:index.php');
}

