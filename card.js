document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("card-image");

    // Array of image paths to cycle through
    const images = ["klaymorr.jpg", "klaymorr1.jpg", "klaymorr2.jpg"]; 
    let index = 0;

    const card = document.querySelector(".spin-card");

    // Listen for animation iteration to change the image
    card.addEventListener("animationiteration", function () {
      index = (index + 1) % images.length; // Cycle through images
      imageElement.src = images[index];
    });
  });