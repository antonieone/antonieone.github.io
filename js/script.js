let nav = document.querySelector('.nav')
let hamburgerMenu = document.querySelector('.nav__mobile')
let body = document.querySelector('body');




hamburgerMenu.addEventListener('click', function(){
  nav.classList.toggle('menu_open')
  body.classList.toggle('body_scroll')
});




// ОБРАТНАЯ СВЯЗЬ НАЧАЛО

let popup = document.querySelectorAll('.popup-link');
let popupOb = document.querySelector('.popupOb');
let popupContent = document.querySelector('.popup__body');
let closePop = document.querySelector('.popup__close');

if(popup.length > 0){
  for (let i = 0; i < popup.length; i++){
    let popLink = popup[i];
      popLink.addEventListener('click', function(e) {
      let popupName = popLink.getAttribute('href').replace('#', '');
      let curentPopup = document.getElementById(popupName);


      closePop.addEventListener('click', function(){
      		curentPopup.classList.remove('openPopup');
          body.classList.toggle('body_scroll');
      	});

      popOpen(curentPopup);

      e.preventDefault();
    });
  }
}



// popup.addEventListener('click', function(e) {
// 	let popupName = popup.getAttribute('href').replace('#', '');
// 	let curentPopup = document.getElementById('popup');
//
// 	popOpen(curentPopup);
//
// 	closePop.addEventListener('click', function(){
// 		curentPopup.classList.remove('openPopup');
//     body.classList.toggle('body_scroll');
// 	});
//
// 	e.preventDefault();
// });

function popOpen(curentPopup){
	curentPopup.classList.add('openPopup');
  body.classList.toggle('body_scroll');
};

// ОБРАТНАЯ СВЯЗЬ КОНЕЦ



// ОСТАВИТЬ ЗАЯВКУ ПОПАП НАЧАЛО

popupOb.addEventListener('click', function(e) {
  let popupObName = popupOb.getAttribute('href').replace('#', '');
  let currentPopUpOb = document.getElementById('popup__ob');

  popOpen(currentPopUpOb);

  closePop.addEventListener('click', function(){
		currentPopUpOb.classList.remove('openPopup');
    body.classList.toggle('body_scroll');
	});

  e.preventDefault();

});


function popOpen(currentPopUpOb){
	currentPopUpOb.classList.add('openPopup');
  body.classList.toggle('body_scroll');
};

// ОСТАВИТЬ ЗАЯВКУ ПОПАП КОНЕЦ


// TAB

document.querySelectorAll('.tabs__item').forEach((item) =>
  item.addEventListener('click', function(e) {
    e.preventDefault();

    let Id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.trucks-price').forEach(
      (child) => child.classList.remove('trucks-price__active')
    );

    document.getElementById(Id).classList.add('trucks-price__active');

  })
);

document.querySelector('.tabs__item').click();


// $(document).ready(function(){
//   $('.tabs__item').click(function(e){
//     e.preventDefault();
//
//     $('.trucks-price').removeClass('trucks-price__active');
//
//     $($(this).attr('href')).addClass('trucks-price__active');
//   });
//
//   $('.tabs__item:first').click();
// });
