// DARK MODE //

// Ordone au script de se charger seulement lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', (event) => { 
const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', () => {

    // Bascule la classlist de body en dark mode
    document.body.classList.toggle('dark-mode'); 

    // Bascule le textContent de toggleButton (le boutton) en fonction du mode light ou dark
    if (document.body.classList.contains('dark-mode')) { 
        toggleButton.textContent = 'Acitvez Light Mode 🌕';
    } else {
        toggleButton.textContent = '🌑 Activez Dark Mode';
    }
});
});

// VALIDATION FORMULAIRE //

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    // blque l'envoi du formulaire
    event.preventDefault();

    // Récupérer les valeurs des champs
    const formName = document.getElementById('formName').value;
    const formNumber = document.getElementById('formNumber').value;
    let valid = true;

    // Vérifier le champ nom
    if (formName.length < 3) {
        alert('Le nom doit contenir au moins 3 caractères.');
        valid = false;
    }

    // Vérifier le nombre de personnes
    if (!Number.isInteger(Number(formNumber)) || Number(formNumber) < 1) {
        alert('Le nombre de personnes doit être un entier.');
        valid = false;
    }

    // Si tout est valide, soumettre le formulaire
    if (valid) {
        this.submit();
    }
});