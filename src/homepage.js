import kitchenStockIMG from './kitchen.jpg';

function loadHomePage() {
    const title = document.createElement('h1');
    title.textContent = 'Welcome to The Restaurant';
    
    const blurb = document.createElement('p');
    blurb.textContent = 'This is a restaurant that sells great food and drink.'.repeat(4);

    const kitchenIMG = document.createElement('img');
    // Photo by Michael Browning
    // https://unsplash.com/@michaelwb?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
    kitchenIMG.src = kitchenStockIMG;
    kitchenIMG.alt = "kitchen scene";

    const content = document.getElementById('content');
    content.appendChild(title);
    content.appendChild(blurb);
    content.appendChild(kitchenIMG);
}

export {
    loadHomePage,
};