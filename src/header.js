function addHeader() {
    const title = document.createElement('h1');
    title.textContent = 'The Restaurant';
        
    const header = document.createElement('header');

    const navBar = document.createElement('nav');

    const navItems = document.createElement('ul'); 
    navItems.className = 'navItems';

    const navHome = document.createElement('li');
    navHome.textContent = 'Home';
    navHome.className = 'navItem';

    const navMenu = document.createElement('li');
    navMenu.textContent = 'Menu';
    navMenu.className = 'navItem';

    const navContact = document.createElement('li');
    navContact.textContent = 'Contact';
    navContact.className = 'navItem';

    navItems.appendChild(navHome);
    navItems.appendChild(navMenu);
    navItems.appendChild(navContact);
    
    header.appendChild(navItems);

    const content = document.getElementById('content');
    content.appendChild(title);
    content.appendChild(header); 

}

export {addHeader};