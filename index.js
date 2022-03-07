let toggle = document.querySelector('.togglebtn');
let monthAmount = document.querySelectorAll('.price-monthly');
let yearAmount = document.querySelectorAll('.price-yearly');
let monthly = document.querySelector('.monthly');
let annually = document.querySelector('.annually');

toggle.addEventListener('click', function () {
  if (!toggle.checked) {
    yearAmount.forEach(x => x.style.display = 'none');
    monthAmount.forEach(x => x.style.display = 'block');
    monthly.classList.remove('color');
    annually.classList.remove('color');
  } else {
    monthAmount.forEach(x => x.style.display = 'none');
    yearAmount.forEach(x => x.style.display = 'block');
    monthly.classList.add('color');
    annually.classList.add('color');
  }
})