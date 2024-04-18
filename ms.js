//MENU RESPONSIVO
let menuResponsivo = document.querySelector('.menu-site');
document.querySelector('#menu').onclick =() =>{
    menuResponsivo.classList.toggle('active');

    

    login.classList.remove('active');
    carrinho.classList.remove('active');

}



window.onscroll = () =>{
    carrinho.classList.remove('active');
    login.classList.remove('active');
}

var swiper = new Swiper(".home-slider",{
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    grapCursor:true,
    loop:true,
    centeredSlides:true,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    }

})



var swiper = new Swiper(".menu-slider", {
    grapCursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetwwen:20,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
  });