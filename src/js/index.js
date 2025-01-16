import '../scss/style.scss';
import '../scss/fonts.scss';

const openButtonFeedback = document.querySelector('.header__button-feedback');
const openButtonCall = document.querySelector('.header__button-call');
const closeButtonFeedback = document.querySelector('.popup__feedback-close');
const closeButtonCall = document.querySelector('.popup__call-close');
const pickFeedback = document.querySelector('.popup__feedback');
const pickCall = document.querySelector('.popup__call');
const background = document.querySelector('.section');


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


const hiddenItems = document.querySelectorAll('.menu .hidden');
const buttonText = document.querySelector('.btn-text');
const iconBtn = document.querySelector('.icon');

function toggleMenu() {
  buttonText.innerText =
    buttonText.innerText === 'Скрыть' ? 'Показать все' : 'Скрыть';

  hiddenItems.forEach((item) => {
    item.style.display =
      item.style.display === 'none' || item.style.display === ''
        ? 'block'
        : 'none';
  });


  if (iconBtn.className === 'icon') {
    iconBtn.className = 'icon closed';
  } else { 
    iconBtn.className = 'icon';
  }

}