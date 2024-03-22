
/************ FUNZIONE PER LA NAVBAR E PER IL PULSANTE TORNA SU ************/


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
    navbar.style.height = "220px";
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



/********** FUNZIONE PER IL CAROSELLO DELLE RECENSIONI CON BOTTONI ***********/


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}




/********** FUNZIONE PER IL CONTROLLO DELLA NEWSLETTER NEL FOOTER ***********/


 document.addEventListener("DOMContentLoaded", function() {
        // Il codice JavaScript che accede agli elementi del DOM va qui
        function validateForm() {
            var email = document.getElementById("eMail").value;

            // Validazione del campo email
            if (email === "") {
                alert("Inserisci la tua email.");
                console.log("Email non inserita");
                return false;
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                alert("L'indirizzo email non è valido. Inserisci un indirizzo email valido.");
                console.log("Email non valida");
                return false;
            }

            // Se la validazione passa, ritorno true per inviare il form
            return true;
        }
    });