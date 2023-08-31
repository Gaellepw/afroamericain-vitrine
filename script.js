// Fonction la barre de navigation lors du défilement de la page
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  let header = document.querySelector("header");
  let headerHeight = header.offsetHeight;

  if (window.scrollY > headerHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Fonction pour afficher un message de confirmation lors de l'envoi du formulaire de contact
var contactForm = document.querySelector(".contact-form");
var contactFormSubmit = document.querySelector(
  ".contact-form input[type='submit']"
);
var nameField = document.querySelector("#name");
var emailField = document.querySelector("#email");
var messageField = document.querySelector("#message");

contactFormSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  // Vérification des champs requis
  if (nameField.value === "") {
    alert("Veuillez saisir votre nom.");
    return;
  }

  if (emailField.value === "") {
    alert("Veuillez saisir votre adresse e-mail.");
    return;
  }

  if (messageField.value === "") {
    alert("Veuillez saisir votre message.");
    return;
  }

  // Validation réussie, affichage du message de remerciement et réinitialisation du formulaire
  alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  contactForm.reset();
});

// Fonction pour afficher un effet de défilement en douceur lors de la navigation sur la page
var navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

//Fonction pour afficher un effet aux images
var galleryImages = document.querySelectorAll(".gallery-image");
var prevButton = document.querySelector(".gallery-button-prev");
var nextButton = document.querySelector(".gallery-button-next");
var currentIndex = 0;

// Afficher les 5 premières images par défaut
showImages(currentIndex, currentIndex + 4);

// Fonction pour afficher les images dans l'intervalle spécifié
function showImages(startIndex, endIndex) {
  galleryImages.forEach(function (image, index) {
    if (index >= startIndex && index <= endIndex) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

// Fonction pour afficher les images suivantes
function showNextImages() {
  var lastIndex = currentIndex + 4;
  if (lastIndex < galleryImages.length - 1) {
    currentIndex++;
    showImages(currentIndex, lastIndex + 1);
  }
}

// Fonction pour afficher les images précédentes
function showPrevImages() {
  var firstIndex = currentIndex - 4;
  if (firstIndex >= 0) {
    currentIndex--;
    showImages(firstIndex, currentIndex);
  }
}

// Ajouter un écouteur d'événement au bouton "Suivant"
nextButton.addEventListener("click", showNextImages);

// Ajouter un écouteur d'événement au bouton "Précédent"
prevButton.addEventListener("click", showPrevImages);
