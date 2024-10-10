<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos enviados por el formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $dealership = htmlspecialchars($_POST['dealership']);
    $message = htmlspecialchars($_POST['message']);

    // Configurar los detalles del correo
    $to = "mateobameule@gmail.com";  // Reemplaza esto con tu dirección de correo
    $subject = "Nueva solicitud de información de distribuidor";
    $body = "Nombre: $name\nCorreo electrónico: $email\nConcesionario preferido: $dealership\nMensaje: $message";

    // Encabezado de correo para que no sea marcado como spam
    $headers = "From: $email" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "¡Formulario enviado correctamente!";
    } else {
        echo "Error al enviar el formulario.";
    }
} else {
    echo "No se ha enviado ningún formulario.";
}