function loadHeader() {
    const content = document.getElementById('content');
    
    const header = document.createElement('header');
    content.appendChild(header);
    
    const contentTitle = document.createElement('h1');
    contentTitle.textContent = 'The Restaurant';
    header.appendChild(contentTitle);
    
    const headerNav = document.createElement('nav');
    header.appendChild(headerNav);

    const navBar = document.createElement('ul');
    navBar.id = 'navBar';
    headerNav.appendChild(navBar);

    for (let item of ['About', 'Menu', 'Booking']) {
        const navItem = document.createElement('li');
        navItem.id = `${item.toLowerCase()}Nav`; 
        navItem.className = 'navItem';
        navItem.textContent = item;
        navBar.appendChild(navItem);
    }
}

function loadFooter() {
    const content = document.getElementById('content');

    const footer = document.createElement('footer');
    footer.textContent = 'This is a footer.'
    content.appendChild(footer);
}

export {
    loadHeader,
    loadFooter,
}