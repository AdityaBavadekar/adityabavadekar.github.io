const themeToggleButton = document.getElementById('theme-toggle-btn');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
});