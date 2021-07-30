function updateNav(newTitle) {
    // update nav highlighting
    document.querySelectorAll('.navItem').forEach(node => {
        if (node.id === newTitle) {
            node.className = 'navItem selected';
        } else {
            node.className = 'navItem';
        }
    });
}

function resetMain() {
    // remove any existing main
    if (document.querySelector('main')) {
        document.querySelector('main').remove();
    }
    
    // append empty main
    const content = document.getElementById('content');
    const footer = document.querySelector('footer');
    
    const main = document.createElement('main');
    
    content.insertBefore(main, footer)
}

export {
    updateNav,
    resetMain,
}