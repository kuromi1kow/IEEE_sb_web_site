var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const passwordInput = document.getElementById("passwordInput");

passwordInput.addEventListener("input", function () {
  const enteredPassword = passwordInput.value;
  const passwordLength = enteredPassword.length;

  if (passwordLength > 50) {
    passwordInput.value = enteredPassword.slice(0, 50);
  }

 
  if (!/^[a-zA-Z]*$/.test(passwordInput.value)) {
    passwordInput.setCustomValidity("Пароль должен содержать только буквы.");
  } else {
    passwordInput.setCustomValidity(""); 
  }
});