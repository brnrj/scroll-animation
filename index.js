const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerButtom = window.innerHeight / 5 * 4;
  boxes.forEach((element) => {
    const boxTop = element.getBoundingClientRect().top;
    if(boxTop < triggerButtom) {
      element.classList.add('show')
    }else {
      element.classList.remove('show')
    }
  })
}