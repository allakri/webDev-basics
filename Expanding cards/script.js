const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // Remove active class from all panels
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
    // Add active class to the clicked panel
    panel.classList.add("active");
  });
});
