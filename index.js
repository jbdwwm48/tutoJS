document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Acitvez Light Mode 🌕';
        } else {
            toggleButton.textContent = '🌑 Activez Dark Mode';
        }
    });
});