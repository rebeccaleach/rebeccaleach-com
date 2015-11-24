var nav = document.getElementById('navigation'),
    body = document.body;

nav.addEventListener('click', function(e) {
    body.className = body.className? '' : 'showhidenav';
    e.preventDefault();
});





// Thanks to HTML Dog for the JS! http://www.htmldog.com/techniques/showhide/