function addFooter() {
    const footer = document.createElement('footer');
    footer.textContent = 'here is the footer';
    
    document.getElementById('content').appendChild(footer); 
}

export {addFooter};