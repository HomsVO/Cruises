(()=>{
    const popupInit =() =>{
        const imgs = document.getElementsByClassName('cruise-block__img');
        const popup = document.getElementById('popup');
        const close_popup = document.getElementById('close-popup');
    
        const popupOpen = () =>popup.style.display = 'block';
        const popupClose = () =>popup.style.display = 'none';
    
        close_popup.onclick = popupClose;
        Array.from(imgs).forEach(img=>img.onclick=popupOpen)
    }
    const popupChangeMainImg = () =>{
        const main_img = document.getElementById('popup__main-img');
        const imgs = document.getElementById('popup__imgs').children;
        Array.from(imgs).forEach(img=>{
            img.onclick = (e)=>{
                main_img.src = e.target.src;
            }
        })
    }
    popupChangeMainImg();
    popupInit();
})()