 const organization = {
    name: "IEEE AITU",
    location: "Astana IT University",
    yearFounded: 2020
};

const readMoreButton = document.getElementById('read-more-button');

function hideButton() {
  readMoreButton.style.display = 'none'; 
}
readMoreButton.addEventListener('click', hideButton);