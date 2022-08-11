const item = document.querySelectorAll('.slider__item');
const buttonWas = document.querySelector('.slider__button-was');
const buttonBecam = document.querySelector('.slider__button-became');
const switchButton = document.querySelector('.slider__container-button');

let toggleItem = function() {
  if (switchButton.classList.contains('slider__container-button')) {
    switchButton.classList.toggle('button-on');
  }
  for (let i = 0; i < item.length; i++) {
    if (item[i].classList.contains('slider__item')) {
      item[i].classList.toggle('slider__item--active');
    }
  }
}



buttonWas.addEventListener('click', toggleItem);

buttonBecam.addEventListener('click', toggleItem);
