const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

const active = 'active';

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle(active);
    navigation.classList.toggle(active);
});