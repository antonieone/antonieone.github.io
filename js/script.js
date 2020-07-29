let nav = document.querySelector('.nav')
let hamburgerMenu = document.querySelector('.nav__mobile')

hamburgerMenu.addEventListener('click', function(){
  nav.classList.toggle('menu_open')
});


// popUp оставить заявку

$('.button').click(function (e){
  e.preventDefault();
  let descriptionPopup = $(this).attr("href");
  $(descriptionPopup).addClass('popup__open');

  var closeBtn = descriptionPopup + ' .popup__close';
  $(closeBtn).click(function (){
    $(descriptionPopup).removeClass('popup__open')
  });
});
