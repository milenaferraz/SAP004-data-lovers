
// Get the modal
const modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


// Get the <span> element that closes the modal
const click = document.querySelector(".card-lista");

// When the user clicks on the button, open the modal
click.addEventListener('click', () => modal.style.display = "block");


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}