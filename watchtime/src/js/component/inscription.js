// Récupérer le formulaire par son ID
const formulaire = document.getElementById('inscription');

// Ajouter un écouteur d'événement pour la soumission du formulaire
formulaire.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire (rechargement de la page)
    event.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const nom = formulaire.nom.value;
    const prenom = formulaire.prenom.value;
    const email = formulaire.email.value;
    const mdp = formulaire.mdp.value;
    const mdpConfirmation = formulaire['mdp-confirmation'].value;

    // Vérifier si les champs sont vides
    if (nom === '' || prenom === '' || email === '' || mdp === '' || mdpConfirmation === '') {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Vérifier si les mots de passe correspondent
    if (mdp !== mdpConfirmation) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }

    // Si tout est correct, vous pouvez soumettre le formulaire ici
    // formulaire.submit();
});
