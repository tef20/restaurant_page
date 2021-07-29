import { updateNav, resetMain } from './preparePage.js'

function loadBookingPage() {
    // prepare page    
    updateNav('bookingNav');
    resetMain();
    
    const main = document.querySelector('main');

    const bookingSection = document.createElement('section');
    bookingSection.id = "bookingSection";
    
    main.appendChild(bookingSection);

    const bookingHeading = document.createElement('h3');
    bookingHeading.textContent = "We have infinite space...";
    bookingSection.appendChild(bookingHeading);
    
    const nameEntry = document.createElement('input');
    nameEntry.setAttribute('type', 'text');
    nameEntry.setAttribute('placeholder', 'name');
    bookingSection.appendChild(nameEntry)
    
    const guestNumEntry = document.createElement('input');
    guestNumEntry.setAttribute('type', 'number');
    guestNumEntry.setAttribute('placeholder', 'number of guests');
    bookingSection.appendChild(guestNumEntry);

    const timeEntry = document.createElement('input');
    timeEntry.setAttribute('type', 'time');
    bookingSection.appendChild(timeEntry);

    const dateEntry = document.createElement('input');
    dateEntry.setAttribute('type', 'date');
    bookingSection.appendChild(dateEntry);

    const bookingButton = document.createElement('input');
    bookingButton.setAttribute('type', 'button');
    bookingButton.setAttribute('value', 'Book!');
    bookingSection.appendChild(bookingButton)
}

export {
    loadBookingPage,
}