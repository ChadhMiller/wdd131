// Get current year and populate in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date and populate in footer
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

//Hamburger Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
   navMenu.classList.toggle('show');
});
