let toggle = document.querySelector('.togglebtn');
let monthAmount = document.querySelectorAll('.price-monthly');
let yearAmount = document.querySelectorAll('.price-yearly');

toggle.addEventListener('click', function () {
  console.log(toggle);
  for (let i = 0; i < monthAmount.length; i++) {
    if (monthAmount[i].style.display === 'block') {
      monthAmount[i].style.display = 'none'
    } else {
      monthAmount[i].style.display = 'block'
    }
  }

  for (let i = 0; i < yearAmount.length; i++) {
    if (yearAmount[i].style.display === 'none') {
      yearAmount[i].style.display = 'block'
    } else {
      yearAmount[i].style.display = 'none'
    }
  }
})
// toggle.onclick = function () {
//   for (let i = 0; i < monthAmount.length; i++) {
//     if (monthAmount[i].style.display === 'block') {
//       monthAmount[i].style.display = 'none'
//     } else {
//       monthAmount[i].style.display = 'block'
//     }
//   }

//   for (let i = 0; i < yearAmount.length; i++) {
//     if (yearAmount[i].style.display === 'none') {
//       yearAmount[i].style.display = 'block'
//     } else {
//       yearAmount[i].style.display = 'none'
//     }
//   }
// }
