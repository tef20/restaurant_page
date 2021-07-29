import { updateNav, resetMain } from './preparePage.js'

function loadAboutPage() {
    // prepare page    
    updateNav('aboutNav');
    resetMain();
    
    const main = document.querySelector('main');

    const aboutSection = document.createElement('section');
    aboutSection.id = "aboutSection";
    
    main.appendChild(aboutSection);

    // WHO section
    const whoSub = document.createElement('h3');
    whoSub.id = 'whoSub';
    whoSub.textContent = 'Who?';
    aboutSection.appendChild(whoSub);

    const whoBlurb = document.createElement('p');
    whoBlurb.id = 'whoBlurb';
    whoBlurb.textContent = 'blablabla bla bla \r\n'.repeat(8);
    aboutSection.appendChild(whoBlurb);
    
    const kitchenIMG = document.createElement('img');
    kitchenIMG.id = 'kitchenIMG';
    kitchenIMG.src = "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80";
    aboutSection.appendChild(kitchenIMG);
 
    // WHERE section
    const whereSub = document.createElement('h3');
    whereSub.id = 'whereSub';
    whereSub.textContent = 'Where?';
    aboutSection.appendChild(whereSub);

    const whereBlurb = document.createElement('p');
    whereBlurb.id = 'whereBlurb';
    whereBlurb.textContent = 'blablabla bla bla \r\n'.repeat(8);
    aboutSection.appendChild(whereBlurb);
    
    const streetIMG = document.createElement('img');
    streetIMG.id = 'streetIMG';
    streetIMG.src = "https://images.unsplash.com/photo-1469307580733-007134b82100?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
    aboutSection.appendChild(streetIMG);

    // WHAT section 
    const whatSub = document.createElement('h3');
    whatSub.id = 'whatSub';
    whatSub.textContent = 'What?';
    aboutSection.appendChild(whatSub);

    const whatBlurb = document.createElement('p');
    whatBlurb.id = 'whatBlurb';
    whatBlurb.textContent = 'blablabla bla bla \r\n'.repeat(8);
    aboutSection.appendChild(whatBlurb);

    const tablesIMG = document.createElement('img');
    tablesIMG.id = 'tablesIMG';
    tablesIMG.src = "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=8";
    aboutSection.appendChild(tablesIMG);
}

export {
    loadAboutPage,
}