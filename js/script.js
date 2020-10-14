let nav = document.querySelector('.nav')
let hamburgerMenu = document.querySelector('.nav__mobile')
let body = document.querySelector('body');


hamburgerMenu.addEventListener('click', function(){
  nav.classList.toggle('menu_open')
  body.classList.toggle('body_scroll')
});




// ОБРАТНАЯ СВЯЗЬ НАЧАЛО

let popup = document.querySelectorAll('.popup-link');
let popupContent = document.querySelector('.popup__body');
let closePop = document.querySelectorAll('.button__close');

if(popup.length > 0){
  for (let i = 0; i < popup.length; i++){
    let popLink = popup[i];
      popLink.addEventListener('click', function(e) {
      let popupName = popLink.getAttribute('href').replace('#', '');
      let curentPopup = document.getElementById(popupName);


      if(closePop.length > 0){
        for(let i = 0; i < closePop.length; i++){
          let closeLink = closePop[i];
          closeLink.addEventListener('click', function(e) {
            curentPopup.classList.remove('openPopup');
            body.classList.remove('body_scroll');
            e.preventDefault();
          });
        }
      }

      popOpen(curentPopup);

      e.preventDefault();
    });
  }
}


function popOpen(curentPopup){
	curentPopup.classList.add('openPopup');
  body.classList.add('body_scroll');
};

// ОБРАТНАЯ СВЯЗЬ КОНЕЦ



// ОСТАВИТЬ ЗАЯВКУ ПОПАП НАЧАЛО

let popupOb = document.querySelector('.popupOb');
let closePopOb = document.querySelector('.button__closeOb');

popupOb.addEventListener('click', function(e) {
  let popupObName = popupOb.getAttribute('href').replace('#', '');
  let currentPopUpOb = document.getElementById('popup__ob');

  popOpen(currentPopUpOb);

  closePopOb.addEventListener('click', function(){
		currentPopUpOb.classList.remove('openPopup');
    body.classList.remove('body_scroll');
	});

  e.preventDefault();

});


function popOpen(currentPopUpOb){
	currentPopUpOb.classList.add('openPopup');
  body.classList.toggle('body_scroll');
};

// ОСТАВИТЬ ЗАЯВКУ ПОПАП КОНЕЦ


// TAB

// let tabsItem = document.querySelectorAll('.tabs__item');
//
// if (tabsItem.length > 0){
//   for (let i = 0; i < tabsItem.length; i++){
//     let tabsItemI = tabsItem[i];
//       tabsItemI.addEventListener('click', function(e) {
//         let tabsItemName = tabsItemI.getAttribute('href').replace('#', '');
//         let currentTab = document.getElementById(tabsItemName);
//
//
//         e.preventDefault();
//
//         tabShow(currentTab);
//
//       });
//
//   };
// };
//
// document.querySelector('.tabs__item').click();
//
//
// function tabShow(currentTab){
//   currentTab.classList.add('trucks-price__active');
// };

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
