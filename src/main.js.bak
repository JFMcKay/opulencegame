// Get the modal element
let modal = document.getElementById("signup-modal");
// Get the button/link that opens the modal
let button = document.getElementById("signup-button");
// Get the <span> element that closes the modal
let span = modal.querySelector(".close");
// Get the card element that flips the card
let card = document.getElementById('card');

function flipCard() {
    if (modal.style.display === 'block') {
        return;
    }
    document.getElementById('card').classList.toggle('flipped');
}

card.addEventListener('click', () => flipCard());

// When the user clicks the button, open the modal
button.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(event) {
    event.stopPropagation();
    if (event.target == span) {
      modal.style.display = "none";
    }
  }


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    event.stopPropagation();
  if (event.target == modal) {
    modal.style.display = "none";
  }
}