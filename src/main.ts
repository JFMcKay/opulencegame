// Get the modal element
let modal: HTMLElement = document.getElementById("signup-modal")!;
// Get the button/link that opens the modal
let button: HTMLElement = document.getElementById("signup-button")!;
// Get the <span> element that closes the modal
let span: HTMLElement = modal.querySelector(".close") as HTMLElement;
// Get the card element that flips the card
let card: HTMLElement = document.getElementById('card')!;

function flipCard(): void {
    if (modal.style.display === 'block') {
        return;
    }
    card.classList.toggle('flipped');
}

card.addEventListener('click', () => flipCard());

// When the user clicks the button, open the modal
button.onclick = function(): void {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(): void {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event: MouseEvent): void {
    event.stopPropagation();
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
