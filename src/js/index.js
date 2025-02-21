import '../scss/style.scss';

// popup variables
const openButtonFeedback = document.querySelector('.header__button-feedback');
const openButtonCall = document.querySelector('.header__button-call');
const closeButtonFeedback = document.querySelector('.popup__feedback-close');
const closeButtonCall = document.querySelector('.popup__call-close');
const pickFeedback = document.querySelector('.popup__feedback');
const pickCall = document.querySelector('.popup__call');
const openButtonFeedback720 = document.querySelector('.call__720')
const openButtonCall720 = document.querySelector('.repair_720')

// sidebar toggle variables
const background = document.querySelector('.section');
const noAside = document.querySelector('.content');
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

// readmore button variables
const hiddenText = document.querySelector('.description__hidden-text');
const readmoreButton = document.querySelector('.description__readmore');
const readmoreIcon = document.querySelector('.readmore-icon')
const readMoreLabel = document.querySelector ('.btn-text-full')
// hidden brands items variables
const buttonText = document.querySelector('.btn-text');
const iconBtn = document.querySelector('.icon');
const hiddenItems = document.querySelectorAll('.brands-menu__cards__hidden');
const toggleButton = document.querySelector('.brands-menu__show-all');

// hidden device items variables
const buttonDeviceText = document.querySelector('.device-btn-text');
const iconDeviceBtn = document.querySelector('.device-icon');
const hiddenDeviceItems = document.querySelectorAll('.device-menu__cards-hidden');
const toggleDeviceButton = document.querySelector('.device-menu__show-all');

// popup 
function blurBackground(popup) {
  popup.classList.toggle('show');
  background.classList.toggle('blurred')
}
function closePopup (popup) {
  popup.classList.remove('show');
  background.classList.remove('blurred');
}
openButtonFeedback.addEventListener('click', () => blurBackground (pickFeedback));
openButtonCall.addEventListener('click', () => blurBackground (pickCall));
openButtonCall720.addEventListener('click', () => blurBackground (pickCall))
openButtonFeedback720.addEventListener('click', () => blurBackground (pickFeedback));

closeButtonCall.addEventListener('click', () => closePopup (pickCall));
closeButtonFeedback.addEventListener('click', () => closePopup (pickFeedback));


// hidden items
 toggleButton.addEventListener('click', () => {
    buttonText.innerText =
      buttonText.innerText === 'Скрыть' ? 'Показать все' : 'Скрыть';
    hiddenItems.forEach((item) => {
      item.style.display =
        item.style.display === 'none' || item.style.display === ''
          ? 'block'
          : 'none';
    });
    iconBtn.classList.toggle('closed');
  });
;

// hidden device items
toggleDeviceButton.addEventListener('click', () => {
  buttonDeviceText.innerText =
    buttonDeviceText.innerText === 'Скрыть' ? 'Показать все' : 'Скрыть';
  hiddenDeviceItems.forEach((item) => {
    item.style.display =
      item.style.display === 'none' || item.style.display === ''
        ? 'block'
        : 'none';
  });
  iconDeviceBtn.classList.toggle('closed')
});


if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    noAside.classList.toggle('blurred')
  });
}

// readmore

readmoreButton.addEventListener('click', () => {
  hiddenText.classList.toggle('hidden');
  readmoreIcon.classList.toggle('closed'); // Переключаем всегда
  
  if (hiddenText.classList.contains('hidden')) {
    readMoreLabel.textContent = 'Скрыть';
  }
  else {
    readMoreLabel.textContent = 'Читать далее';
  }
});

const swiperOptions = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  slidesPerView: 'auto'
}
const swiper = new Swiper('.swiper', {
  ...swiperOptions
});
