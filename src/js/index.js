import '../scss/style.scss';
import '../scss/fonts.scss';

const openButtonFeedback = document.querySelector('.header__button-feedback');
const openButtonCall = document.querySelector('.header__button-call');
const closeButtonFeedback = document.querySelector('.popup__feedback-close');
const closeButtonCall = document.querySelector('.popup__call-close');
const pickFeedback = document.querySelector('.popup__feedback');
const pickCall = document.querySelector('.popup__call');
const background = document.querySelector('.section');
const noAside = document.querySelector('.content')

openButtonFeedback.addEventListener('click', () => {
  pickFeedback.classList.toggle('show');
  background.classList.toggle('blurred');
});


openButtonCall.addEventListener('click', () => {
  pickCall.classList.toggle('show');
  background.classList.toggle('blurred');
});

closeButtonCall.addEventListener('click', () => {
  pickCall.classList.remove('show');
  background.classList.remove('blurred');
});

closeButtonFeedback.addEventListener('click', () => {
  pickFeedback.classList.remove('show');
  background.classList.remove('blurred');
});

  const hiddenItems = document.querySelectorAll('.brands-menu__cards__hidden');
  const buttonText = document.querySelector('.btn-text');
  const iconBtn = document.querySelector('.icon');
  const toggleButton = document.querySelector('.brands-menu__show-all');

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

const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    noAside.classList.toggle('blurred')
  });
}

const hiddenText = document.querySelector('.description__hidden-text');
const readmoreButton = document.querySelector('.description__readmore');

readmoreButton.addEventListener('click', () => {
  hiddenText.classList.toggle('hidden');
  if (hiddenText.classList.contains('hidden')) {
    readmoreButton.textContent = 'Скрыть'; 
  } else {
    readmoreButton.textContent = 'Читать далее'; 
  }
});