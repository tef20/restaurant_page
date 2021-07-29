import {createFooter} from './footer.js'
import {addHeader} from './header.js'
import kitchenStockIMG from './kitchenM.jpg';

function loadHomePage() {
    const mainSection = createElement('div');

    const subHeader = document.createElement('h2');
    subHeader.textContent = 'About';
    subHeader.className = 'blurb';

    const blurb = document.createElement('p');
    blurb.textContent = 'This is a restaurant that sells great food and drink. '.repeat(10);
    blurb.className = 'blurb';
    blurb.style.display = 'grid';
    
    // subHeader.style.display = 'grid';

    // const kitchenIMG = document.createElement('img');
    // // Photo by Michael Browning
    // // https://unsplash.com/@michaelwb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
    // kitchenIMG.src = kitchenStockIMG;
    // kitchenIMG.id = 'kitchenIMG';
    // kitchenIMG.alt = "kitchen scene";

    const content = document.getElementById('content');
    content.appendChild(subHeader);
    content.appendChild(blurb);

}

export {
    loadHomePage,
};