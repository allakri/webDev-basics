const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", debounce(checkboxes, 100)); // Debounce with 100ms delay

function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

function checkboxes() {
  const trigger = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < trigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
