"use strict";
function chips(message) {
let chips = document.createElement('div'); 
chips.classList.add('chips');
chips.innerHTML = message;
document.querySelector('body').appendChild(chips);
setTimeout(function(){deleteChips(chips)}, 5000); //удаляет по таймеру 
}
/*
document.querySelector('#btn').onclick = function() {
    chips('Hello');
}
*/
chips('hello');

function deleteChips(chips) { 
    chips.remove();  // удаляет из дома
}
