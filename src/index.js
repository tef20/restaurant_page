import { addNavBindings } from './bindings.js'
import { loadHeader, loadFooter } from './basicPage.js';
import './reset.css';
import './style.css';

const fuggleFont = document.createElement('link');
fuggleFont.setAttribute('href', "https://fonts.googleapis.com/css2?family=Fuggles&display=swap");
fuggleFont.setAttribute('rel', "stylesheet");
document.head.appendChild(fuggleFont);

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

loadHeader();
loadFooter();
addNavBindings();
// loadAboutPage();
// loadMenuPage();
// loadBookingPage();