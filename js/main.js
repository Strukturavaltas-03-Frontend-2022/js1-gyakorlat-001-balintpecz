'use strict'

const handleClick = () => {
    let element = document.querySelectorAll('.button');
    for(let i=0; i<element.length; i++){
        element[i].addEventListener('click',() => console.log(element[i].textContent));
    }
}



