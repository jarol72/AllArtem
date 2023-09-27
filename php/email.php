<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpMailer/src/Exception.php';
require './phpMailer/src/PHPMailer.php';
require './phpMailer/src/SMTP.php';

if (isset($_POST["send"])) {
    try {
        $mail = new PHPMailer(true);

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = '';
        $mail->Password = '';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('');
        $mail->addAddress($_POST['email']);
        $mail->isHTML(false);
        $mail->Subject = 'All Artem - Nuevo Mensaje';

        $mailBody = "Nombre: {$_POST['name']}" . "\n";
        $mailBody .= "Email: {$_POST['email']}\n";
        $mailBody .= "Interesado(a) en: {$_POST['tema']}\n\n";
        $mailBody .= "Mensaje: {$_POST['message']}\n";

        $mail->Body = $mailBody;

        $mail->send();
        header("refresh:1;url=/index.html#contact__form");
        echo
            "
	
        <h1>
            alert('El mensaje se ha enviado correctamente');
            
        </h1>
        ";
    } catch (Exception $e) {
        header("refresh:1;url=/index.html#contact__form");
        "
        <h3>
            alert('El mensaje no pudo ser enviado.  Error: {$mail->ErrorInfo}');
            
        </h3>
        ";
    }
}


/* if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize user input
    function sanitizeInput($input) {
        $input = trim($input);
        $input = stripslashes($input);
        $input = htmlspecialchars($input);
        return $input;
    }

    echo $_POST["NAME"];

    $name = sanitizeInput($_POST["name"]);
    $email = sanitizeInput($_POST["email"]);
    $tema = sanitizeInput($_POST["tema"]);
    $message = sanitizeInput($_POST["message"]);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    // Set recipient email address
    $to = "jarol72@gmail.com";

    // Set email subject
    $subject = "New Contact Form Submission";

    // Compose the email message
    $message_body = "Name: $name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Interesado(a) en: $tema\n";
    $message_body .= "Message:\n$message";

    // Send the email
    if (mail($to, $subject, $message_body)) {
        // Email sent successfully
        echo "Thank you for your message. We will get back to you soon.";
    } else {
        // Email sending failed
        echo "Sorry, there was an error sending your message.";
    }
    header("Location: /index.html");
} */