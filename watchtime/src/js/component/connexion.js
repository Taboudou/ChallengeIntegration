// Récupérer le formulaire par son ID
const formulaire = document.getElementById('connexion');

// Ajouter un écouteur d'événement pour la soumission du formulaire
formulaire.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire (rechargement de la page)
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const email = formulaire.mailconnexion.value;
    const mdp = formulaire.mdpconnexion.value;

    // Vérifier si les champs sont vides
    if (email === '' || mdp === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Si tout est correct, vous pouvez soumettre le formulaire ici
    // formulaire.submit();
});
