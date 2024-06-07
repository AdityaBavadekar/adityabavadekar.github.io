const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

lightIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-theme')
});

darkIcon.addEventListener('click', () => {
    document.body.classList.add('dark-theme')
});