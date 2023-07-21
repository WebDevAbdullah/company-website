window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "../css/style.css";
import "../sass/style.scss";
import "jquery";

$(function () {
  $(".thumbnail").hover(
    function () {
      $(this).find(".project-category").hide();
      $(this).find(".caption").slideDown(250);
    },

    function () {
      $(this).find(".caption").slideUp(250);
      $(this).find(".project-category").show();
    }
  );
});

let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = "جميع الحقوق محفوظة أكاديمية حسوب" + " &copy; " + year;

// New
// Get silder items | Array.from() ES6 Feature
const sliderImg = Array.from(document.querySelectorAll(".modal-body img"));

// Get number of slides
const slidesCount = sliderImg.length;

// Set current slide
let currentSlide = 1;

// Previous and next buttons
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Get modal title
const modalImageTitle = document.getElementById("modalImageTitle");

// Get gallery images | Array.from() ES6 Feature
const galleryImg = Array.from(document.querySelectorAll(".gallery__img-block"));

function removeAllActive() {
  sliderImg.forEach((img) => img.classList.remove("active"));
}

function updateSlide() {
  removeAllActive();

  // Add active class on current slide
  sliderImg[currentSlide - 1].classList.add("active");

  const imageTitle = sliderImg[currentSlide - 1].getAttribute("data-title");
  modalImageTitle.innerHTML = imageTitle;

  // Check if current slide is the first
  prevButton.classList.toggle("disabled", currentSlide === 1);

  // Check if current slide is the last
  nextButton.classList.toggle("disabled", currentSlide === slidesCount);
}

updateSlide();

// Next slide function
function nextSlide() {
  if (!nextButton.classList.contains("disabled")) {
    currentSlide++;
    updateSlide();
  }
}

// Previous slide function
function prevSlide() {
  if (!prevButton.classList.contains("disabled")) {
    currentSlide--;
    updateSlide();
  }
}

// Handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

function setupImageClickEvent() {
  function imageClicked(event) {
    // Get the index of the clicked image in the galleryImg array
    const clickedIndex = galleryImg.indexOf(event.currentTarget);

    // Update currentSlide to the index of the clicked image + 1
    currentSlide = clickedIndex + 1;

    // Call updateSlide() to update the active slide and modal title
    updateSlide();
  }

  galleryImg.forEach((img) => img.addEventListener("click", imageClicked));
}

setupImageClickEvent();
