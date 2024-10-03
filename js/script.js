// Texte dynamique avec plusieurs phrases
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('dynamic-text');
    const textsToShow = ["Bonjour, je m'appelle Zamzam"];
    let index = 0;
    let textIndex = 0;

    function typeEffect() {
        if (index < textsToShow[textIndex].length) {
            textElement.innerHTML += textsToShow[textIndex].charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Vitesse de l'effet de saisie
        } else {
            setTimeout(deleteEffect, 2000); // Temps avant de supprimer le texte
        }
    }

    function deleteEffect() {
        if (index > 0) {
            textElement.innerHTML = textsToShow[textIndex].substring(0, index - 1);
            index--;
            setTimeout(deleteEffect, 50); // Vitesse de suppression
        } else {
            textIndex = (textIndex + 1) % textsToShow.length; // Passe à la phrase suivante
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect(); // Initialiser l'effet au chargement de la page
});

// Gestion des clics sur les images pour afficher/masquer le texte associé
document.addEventListener('DOMContentLoaded', function() {
    const imageItems = document.querySelectorAll('.project-card');

    // Boucle sur chaque project-card pour ajouter un gestionnaire d'événements
    imageItems.forEach(item => {
        const image = item.querySelector('img');
        const text = item.querySelector('.text');

        // Vérification de l'existence des éléments image et texte
        if (image && text) {
            image.addEventListener('click', () => {
                // Toggle (basculer) la classe hidden pour afficher ou cacher le texte
                text.classList.toggle('hidden');
            });
        }
    });
});


