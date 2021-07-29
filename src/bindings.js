import { loadAboutPage } from './aboutPage.js';
import { loadBookingPage } from './bookingPage.js';
import { loadMenuPage } from './menuPage.js';

function addNavBindings() {
    const navItems = [...document.getElementsByClassName('navItem')];
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target.id === 'aboutNav') {
                loadAboutPage();
            } else if (e.target.id === 'menuNav') {
                loadMenuPage();
            } else if (e.target.id === 'bookingNav') {
                loadBookingPage();
            }
        })
    });
}

export {
    addNavBindings,
}