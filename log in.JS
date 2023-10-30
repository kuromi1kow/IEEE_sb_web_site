const modal = document.querySelector('#id01');
const passwordInput = document.querySelector('#passwordInput');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
passwordInput.addEventListener("input", function () {
    const enteredPassword = passwordInput.value;
    const passwordLength = enteredPassword.length;

    if (passwordLength > 50) {
        passwordInput.value = enteredPassword.slice(0, 50);
    }
    if (!/^(?=.*[a-zA-Z])(?=.*\d)/.test(passwordInput.value)) {
        passwordInput.setCustomValidity("Пароль должен содержать только буквы и как минимум одно число");
    } else {
        passwordInput.setCustomValidity(""); 
    }
});

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
