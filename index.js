let toggle = document.querySelectorAll('.togglebtn');
let monthAmount = document.querySelectorAll('.price-monthly');
let yearAmount = document.querySelectorAll('.price-yearly');

function toggled() {
  if (toggle.checked == true) {
    console.log('true');
    // yearAmount.style.display = 'block';
  } else {
    console.log('false');
  }
}