const navToggle = document.querySelector('.menu-nav-toggle');
const navigation = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');

// aria-expanded attribute will change here
navToggle.addEventListener('click', () => {
    const navVisibility = navList.getAttribute('data-visible');

    if(navVisibility === "false") {
        navList.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        navList.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});