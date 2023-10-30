
const text = {
    txt_add: document.getElementById("add_information"),
    btn: document.getElementById("read-more-button")
};

text.btn.addEventListener("click", function () {
    if (text.txt_add.style.display === "none" || text.txt_add.style.display === "") {
        text.txt_add.style.display = "block";
        text.btn.textContent = "Hide"; 
    } else {
        text.txt_add.style.display = "none";
        text.btn.textContent = "Read more"; 
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


const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("mouseover", function () {

    submitButton.innerHTML = '<i class="fa fa-check-square"></i> Mouseover ^)';
});

submitButton.addEventListener("mouseout", function () {
   
    submitButton.innerHTML = '<i class="fa fa-check-square"></i> Submit';

});
var audio = document.getElementById('audioPlayer');
  audio.addEventListener('play', function() {
    console.log('Аудио начало воспроизведения');
  });

  audio.addEventListener('pause', function() {
    console.log('Аудио остановлено');
  });

  