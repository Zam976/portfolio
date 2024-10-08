// Texte dynamique avec un effet de typewriter
// Effet de texte dynamique avec typewriter
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('dynamic-text');
    const textToShow = "Bonjour, je m'appelle Zamzam"; 
    let index = 0;

    function typeEffect() {
        if (index < textToShow.length) {
            textElement.innerHTML += textToShow.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Vitesse de l'effet de saisie
        }
    }

    typeEffect(); // Initialiser l'effet au chargement de la page
});



// Gestion des clics sur les images pour afficher/masquer le texte associé
document.addEventListener('DOMContentLoaded', function() {
    const imageItems = document.querySelectorAll('.project-card');

    imageItems.forEach(item => {
        const image = item.querySelector('img');
        const text = item.querySelector('.text');

        if (image && text) {
            image.addEventListener('click', () => {
                text.classList.toggle('hidden'); // Affiche ou masque le texte lorsque l'image est cliquée
            });
        }
    });
});

// Boutons toggle pour afficher/masquer plus de détails
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const fullText = button.previousElementSibling;
        if (fullText.classList.contains('hidden')) {
            fullText.classList.remove('hidden');
            button.textContent = "Moins de détails";
        } else {
            fullText.classList.add('hidden');
            button.textContent = "Plus de détails";
        }
    });
});


