var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Youtuber", "Web Developer"],
  typeSpeed: 100,
  typeSpeed: 100,
  typeSpeed: 100,
  loop: true,
});

// Select all elements with the class "processing-bar"
var processingBars = document.querySelectorAll(".processing-bar");

// Define the animation function
function animateProcessingBar(processing) {
  setTimeout(() => {
    processing.style.opacity = 1;
    processing.style.width = processing.getAttribute("data-bar") + "%";
  }, 500);
}

// Use forEach to apply the animation function to each element
processingBars.forEach(function (processingBar) {
  animateProcessingBar(processingBar);
});
