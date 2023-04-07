const navContainer = document.querySelector(".nav-container");
const showNavButton = document.querySelector("#show-nav-button");
const hideNavButton = document.querySelector("#hide-nav-button");

showNavButton.addEventListener('click', () => {
   navContainer.setAttribute('data-visible', true);
})
hideNavButton.addEventListener('click', () => {
   navContainer.setAttribute('data-visible', false);
})