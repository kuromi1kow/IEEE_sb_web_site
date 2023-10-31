
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

// const firstButton = document.getElementById("start");
// const secondButton = document.getElementById("middle");
// const thirdButton = document.getElementById("last");

document.addEventListener("keypress", function (event) {
  if (event.key === '1' ) {
    window.location.href = 'index.html#start';
  } else if (event.key === '2') {
    window.location.href = 'index.html#middle';
  } else if (event.key === '3') {
    window.location.href = 'index.html#last';
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
audio.addEventListener('play', function () {
  console.log('Аудио начало воспроизведения');
});

audio.addEventListener('pause', function () {
  console.log('Аудио остановлено');
});

