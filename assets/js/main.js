// Highlight active nav link
(function () {
  const links = document.querySelectorAll('.nav a');
  links.forEach(l => {
    if (location.pathname.endsWith(l.getAttribute('href'))
      || (location.pathname.endsWith('/') && l.getAttribute('href') === 'index.html')) {
      l.classList.add('active');
    }
  });
})();

// =======================
// Product Image Handling
// =======================

// All product images (replace with your actual images)
const boxImages = [
  "assets/images/Boxes/Kraft/KB1-1.jpg",
  "assets/images/Boxes/Kraft/KB1-2.jpg",
  "assets/images/Boxes/Kraft/KB1-3.jpg",
  "assets/images/Boxes/Kraft/KB1-4.jpg",
  "assets/images/Boxes/Kraft/KB2-1.jpg",
];

let currentIndex = 0;

// Change main image when clicking thumbnail
function setImage(thumb) {
  const gallery = thumb.closest(".product-gallery");
  const mainImg = gallery.querySelector(".main-image img");
  mainImg.src = thumb.src; // set clicked thumbnail as main image
}

function scrollThumbnails(btn, direction) {
  const gallery = btn.closest(".product-gallery");
  const container = gallery.querySelector(".thumbnails");
  const scrollAmount = 80;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

// =======================
// Modal (Fullscreen Zoom)
// =======================
let modal = document.getElementById("imageModal");
let modalImg = document.getElementById("modalImage");
let modalImages = [];   // will hold images of the clicked gallery

function openModal(img) {
  const gallery = img.closest(".product-gallery");
  modalImages = [...gallery.querySelectorAll(".thumbnails img")].map(el => el.src);
  currentIndex = modalImages.indexOf(img.src);

  modal.style.display = "block";
  modalImg.src = modalImages[currentIndex];
}

function closeModal() {
  modal.style.display = "none";
}

function changeModalImage(step) {
  currentIndex += step;
  if (currentIndex >= modalImages.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = modalImages.length - 1;
  modalImg.src = modalImages[currentIndex];
}
function toggleMenu() {
  document.querySelector(".nav").classList.toggle("show");
}

function sendWhatsApp(button) {
  // Find product title
  const product = button.closest(".product");
  const title = product.querySelector("h3").innerText.trim();

  // Your WhatsApp number
  const phone = "923152396345";

  // Encode message
  const message = encodeURIComponent(`Hi! I’m interested in ${title}.`);

  // Redirect to WhatsApp with product title
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}