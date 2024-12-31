const progress = document.getElementById("progress");
const previous = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
    update();
  }
});

previous.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
    update();
  }
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".circle.active");

  // Update the progress bar width based on active circles
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
//   console.log(progress.style.width);
  // Enable/Disable buttons
  if (currentActive === 1) {
    previous.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    previous.disabled = false;
    next.disabled = false;
  }
}

// Initial setup
update();
