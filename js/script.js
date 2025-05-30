// Smooth Scroll
      
const links = document.querySelectorAll(".menu__link,.footer-menu__link");

for (const link of links) {
link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}
// Button Up

window.onscroll = function(){scrollFunction()};

const upbuttons = document.querySelectorAll(".button-up");

for (const upbutton of upbuttons) {
    upbutton.addEventListener("click", clickHandler);
}

function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}

function scrollFunction(){
    if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById('btnUp').className = 'button-up visible';
    } else {
        document.getElementById('btnUp').className = 'button-up hidden';
    }
}


const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click',()=>{
  menuList.classList.toggle('menu__list--open');
  menuShadow.classList.toggle('menu--open');
});
menuClose.addEventListener('click',()=>{
  menuList.classList.remove('menu__list--open');
  menuShadow.classList.remove('menu--open');
});
menuShadow.addEventListener('click', function(event) {
    if (event.target === menuShadow) {
      menuList.classList.remove('menu__list--open');
      menuShadow.classList.remove('menu--open');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtns = document.querySelectorAll('.open-popup-btn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popupOverlay = document.getElementById('popupOverlay');

    // Открытие поп-апа для каждой кнопки
    openPopupBtns.forEach(button => {
        button.addEventListener('click', function() {
            popupOverlay.style.display = 'flex'; // Показываем оверлей
        });
    });

    // Закрытие поп-апа по кнопке "x"
    closePopupBtn.addEventListener('click', function() {
        popupOverlay.style.display = 'none'; // Скрываем оверлей
    });

    // Закрытие поп-апа при клике вне его содержимого (на оверлее)
    popupOverlay.addEventListener('click', function(event) {
        if (event.target === popupOverlay) { // Проверяем, что клик был именно по оверлею, а не по содержимому поп-апа
            popupOverlay.style.display = 'none';
        }
    });
});