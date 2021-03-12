const slide = () => {
  const carousel = document.querySelector('.about__carousel');
  if (carousel.classList.contains('active')) {
    carousel.classList.remove('active');
  } else {
    carousel.classList.add('active');
  }
};

const toggleAnswer = document.querySelectorAll('.questions__button');
toggleAnswer.forEach((button) => {
  button.addEventListener('click', () => {
    const ans = button.nextElementSibling;
    if (button.classList.contains('active')) {
      button.classList.remove('active');
      ans.classList.remove('active');
    } else {
      button.classList.add('active');
      ans.classList.add('active');
    }
  });
});

const changeHeader = () => {
  const header = document.querySelector('.header');
  let y = window.scrollY;
  if (y >= 20) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};

window.onscroll = changeHeader;
