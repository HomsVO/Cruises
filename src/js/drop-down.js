


function drowDownMenu(elementId,togglerId){
    const menu = document.getElementById(elementId);
    const toggler = document.getElementById(togglerId);
    toggler.addEventListener('click',()=>{
        menu.classList.toggle('show')
    })
}
drowDownMenu('drop-down','menu-toggler')
