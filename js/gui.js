document.querySelector('#menu-btn').addEventListener("click", toggleMenu);

function toggleMenu(){
    
    if(document.querySelector('#menu-items').style.display == 'block')
        document.querySelector('#menu-items').style.display = 'none';
    else
        document.querySelector('#menu-items').style.display = 'block';
}