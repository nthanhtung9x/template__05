// modal
const modal = document.getElementsByClassName('modal')[0];
const modalWrap = document.getElementsByClassName('modal__wrapper')[0];

function showModal(){
    modal.style.display = "block";
    modalWrap.style.visibility = "visible";
}

function hiddenModal(){
    modal.style.display = "none";
    modalWrap.style.visibility = "collapse";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}