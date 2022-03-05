let toggle = document.querySelector('.togglebtn');
let monthAmount = document.querySelectorAll('.price-monthly');
let yearAmount = document.querySelectorAll('.price-yearly');

toggle.addEventListener('click', function () {
  if (!toggle.checked) {
    yearAmount.forEach(x => x.style.display = 'none');
    monthAmount.forEach(x => x.style.display = 'block');
  } else {
    monthAmount.forEach(x => x.style.display = 'none');
    yearAmount.forEach(x => x.style.display = 'block');
  }
})