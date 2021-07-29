import { updateNav, resetMain } from './preparePage.js'

function loadMenuPage() {
    // prepare page    
    updateNav('menuNav');
    resetMain();
    
    const main = document.querySelector('main');

    const menuSection = document.createElement('section');
    menuSection.id = "menuSection";
    
    main.appendChild(menuSection);
    
    // MENU:menu
    let templateMenuItems = {
        'mains': {
            'spam': '£5',
            'egg': '£5',
            'chips': '£5'
        },
        'sides': {
            'spam': '£5',
            'egg': '£5',
            'chips': '£5'
        },
        'desserts': {
            'spam': '£5',
            'egg': '£5',
            'chips': '£5'
        }

    };
   
    for (let course in templateMenuItems) {
        // create heading
        const courseHeading = document.createElement('h3');
        courseHeading.id = `${course}Heading`;
        courseHeading.textContent = `${course}`
        menuSection.appendChild(courseHeading);
    
        // create menu grid
        const courseMenu = document.createElement('section');
        courseMenu.id = `${course}Menu`;
        courseMenu.className = 'courseMenu';
        menuSection.appendChild(courseMenu);

        for (let item in templateMenuItems[course]) {
            // add item
            const sideItem = document.createElement('p');
            // sideItem.id = `${course}_${item}`;
            sideItem.className = 'menuItem';
            sideItem.textContent = `${item}`;
            courseMenu.appendChild(sideItem);

            // add price
            const sidePrice = document.createElement('p');
            // sidePrice.id = `sidePrice${i + 1}`;
            sidePrice.className = 'menuItemPrice';
            sidePrice.textContent = templateMenuItems[course][item];
            courseMenu.appendChild(sidePrice);
        }
    }    

    // MENU:gallery
    const menuGallery = document.createElement('div');
    menuGallery.id = 'menuGallery';
    main.appendChild(menuGallery);
    
    const burgersIMG = document.createElement('img');
    burgersIMG.id = 'burgersIMG';
    burgersIMG.src = "https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80";
    menuGallery.appendChild(burgersIMG);
 
    const pastaIMG = document.createElement('img');
    pastaIMG.id = 'pastaIMG';
    pastaIMG.src = "https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1537&q=80";
    menuGallery.appendChild(pastaIMG);

    const cafeIMG = document.createElement('img');
    cafeIMG.id = 'cafeIMG';
    cafeIMG.src = "https://images.unsplash.com/photo-1558013891-da4959724894?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    menuGallery.appendChild(cafeIMG);
    
    const coffeeIMG = document.createElement('img');
    coffeeIMG.id = 'coffeeIMG';
    coffeeIMG.src = "https://images.unsplash.com/photo-1551266517-7c1ad680883a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlc3RhdXJhbnQlMjBzdGFmZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    menuGallery.appendChild(coffeeIMG);

    const orderingIMG = document.createElement('img');
    orderingIMG.id = 'orderingIMG';
    orderingIMG.src = "https://images.unsplash.com/photo-1514773897744-c63156ebcd94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHJlc3RhdXJhbnQlMjBzdGFmZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    menuGallery.appendChild(orderingIMG);

    const beansIMG = document.createElement('img');
    beansIMG.id = 'beansIMG';
    beansIMG.src = "https://images.unsplash.com/photo-1600271801401-65fe5f623a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    menuGallery.appendChild(beansIMG);

}

export {
    loadMenuPage,
}