<?php

$errors = [];
$errorMessage = '';
   
if (!empty($_POST)) {
   $name = $_POST['name'];
   $surname = $_POST['surname'];
   $message = $_POST['message'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
  


   if (empty($name)) {
       $errors[] = 'Name is empty';
   }

   if (empty($email)) {
       $errors[] = 'Email is empty';
   } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid';
   }

   if (empty($message)) {
       $errors[] = 'Message is empty';
   }

   if (empty($errors)) {
       $toEmail = 'pietro.rimoli89@gmail.com';
       $emailSubject = 'New email from valentinacorni.it';
       $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
       $bodyParagraphs = ["{$name}",
       
     
       "Surname: {$surname}",
       
       "Email: {$email}", 
       
       "tel: {$phone}", 
       
       "Message:", $message];
       $body = join(PHP_EOL, $bodyParagraphs);

       if (mail($toEmail, $emailSubject, $body, $headers)) {
       echo json_encode(['success' => true, 'message' => 'Messaggio inviato con successo. Grazie!']);
            exit;

      
       } else {
           $errorMessage = 'Oops, something went wrong. Please try again later';
             
       }

   } else {

       $allErrors = join('<br/>', $errors);
       $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
   }
      echo json_encode(['success' => false, 'message' => $errorMessage]);
    exit;
}
 
?>