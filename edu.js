
const firstButton = document.getElementById("nav-link1");
const secondButton = document.getElementById("nav-link2");
const thirdButton = document.getElementById("nav-link2");

document.addEventListener("keypress", function (event) {
  if (event.key === '1' && document.activeElement === firstButton) {
    window.location.href = 'index.html';
  } else if (event.key === '2' && document.activeElement === secondButton) {
    window.location.href = 'educational.html';
  } else if (event.key === '3' && document.activeElement === thirdButton) {
    window.location.href = 'login.html';
  }
});