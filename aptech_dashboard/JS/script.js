const hamburger = document.querySelector('.navResponsive .icon');
        
hamburger.onclick = function(){
    document.querySelector('.navlinks').classList.add('show');
    document.querySelector('body').style.overflowY = 'hidden';
}

const cancel = document.querySelector('.cancel');
cancel.onclick = function(){
    document.querySelector('.navlinks').classList.remove('show');
    document.querySelector('body').style.overflowY = 'visible';

}