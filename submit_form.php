<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collecter les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $category = htmlspecialchars($_POST['category']);
    $message = htmlspecialchars($_POST['message']);

    // L'email vers lequel les messages seront envoyés
    $to = "votre-email@example.com";
    $subject = "Nouveau message du formulaire de contact : $subject";
    
    // Le contenu de l'email
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Catégorie: $category\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Les en-têtes de l'email
    $headers = "From: $email";
    
    // Envoyer l'email
    if (mail($to, $subject, $email_content, $headers)) {
        // Rediriger vers une page de confirmation
        header("Location: merci.html");
    } else {
        echo "Il y a eu une erreur lors de l'envoi de votre message.";
    }
}

?>

<html>
<head>
    <title>Merci</title>
</head>
<body>
    <h1>Merci de nous avoir contacté !</h1>
    <p>Nous avons bien reçu votre message et vous contacterons bientôt.</p>
</body>
</html>
