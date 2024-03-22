


// Funzione per chiudere il popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Mostra il popup quando il documento è pronto
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("popup").style.display = "block";
});






// Aspetta il caricamento completo della pagina prima di eseguire lo script
window.onload = function () {
  // Assegna la funzione scrollata() all'evento onscroll
  window.onscroll = function () {
    scrollata();
  };

  // Gestisci il click sul pulsante "Torna su"
  document.getElementById("backToTopBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita il comportamento di default del link
    window.scrollTo({top: 0, behavior: 'smooth'}); // Scorrimento fluido verso l'alto
  });
};

// Funzione per gestire lo scroll e mostrare/nascondere il pulsante "Torna su"
function scrollata() {
  // Ottieni la posizione dello scroll verticale
  let scrollTop = window.scrollY;

  // Ottieni l'elemento navbar dal DOM
  let navbar = document.getElementById("navbar");

  // Ottieni l'elemento del pulsante "Torna su"
  let backToTopBtn = document.getElementById("backToTopBtn");

  // Controlla se lo scroll è superiore a 200px
  if (scrollTop > 200) {
    // Se lo è, nascondi la navbar
    navbar.style.height = "0";
    navbar.style.transition = "0.8s";
    navbar.style.borderBottom = "none";
  } else {
    // Altrimenti, mostra la navbar con altezza 200px
    navbar.style.height = "200px";
    navbar.style.backgroundColor = "transparent";
    navbar.style.borderBottom = "2px solid darkorange";
  }

  // Controlla se lo scroll è superiore a metà del viewport
  if (scrollTop > window.innerHeight / 2) {
    // Se lo è, mostra il pulsante "Torna su"
    backToTopBtn.style.display = "block";
  } else {
    // Altrimenti, nascondi il pulsante "Torna su"
    backToTopBtn.style.display = "none";
  }
}



let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2500); // Change image every 2 seconds
}