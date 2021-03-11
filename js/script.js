const slide = () => {
  const carousel = document.querySelector('.about__carousel');
  if (carousel.classList.contains('active')) {
    carousel.classList.remove('active');
  } else {
    carousel.classList.add('active');
  }
};

const showAnswer = () => {
  const button = document.querySelector('.questions__button');
  const answer = document.querySelector('.questions__answer');
  if (
    button.classList.contains('active') &&
    answer.classList.contains('active')
  ) {
    button.classList.remove('active');
    answer.classList.remove('active');
  } else {
    button.classList.add('active');
    answer.classList.add('active');
  }
};
