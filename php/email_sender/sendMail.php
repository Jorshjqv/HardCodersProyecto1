<?php
 
 $email = $_POST['to'];
 $password = $_POST['password'];
 $message = $_POST['message'];
 $subject = $_POST['subject'];;
 $userName = $_POST['name'];;
 
 $body = '
    <html>
    <head>
        <title>¡Bienvenido! '.$userName.' </title>
    </head>
    <body>
        <h1>¡Bienvenido! '.$userName.'</h1>
        <h4>Acceso a la cuenta de la Federación Costarricense de Taekwondo</h4>
        <table cellspacing="0" style="border: 2px black; width: 300px; height: 200px;">
            <tr>
                <th>Nombre de usuario: </th><td>'.$email.'</td>
            </tr>
            <tr style="background-color: #e0e0e0;">
                <th>Contraseña temporal: </th><td>'.$password.'</td>
            </tr>
            <tr>
                <th>Gracias por unirse '.$userName.'</td>
            </tr>
        </table>
    </body>
    </html>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
 $headers .= 'From: fcthardcoders@gmail.com' . "\r\n" .
    'Reply-To: fcthardcoders@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	
	mail($email, $subject, $body,$headers);
  
 ?>