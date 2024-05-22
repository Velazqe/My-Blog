document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.toggle');
    const body = document.querySelector('body');
    
    toggleSwitch.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});