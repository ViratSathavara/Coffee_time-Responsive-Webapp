 let menu = document.getElementById('#menu-icon');
 let navbar = document.querySelector('.navbar');

function toggle() {
    if(navbar.style.top=='-500px') {
        
        navbar.style.top = '0px'; 
        navbar.remove = '0px'; 

    } 
    else {
        
        navbar.style.top = '-500px'; 
    }
}


