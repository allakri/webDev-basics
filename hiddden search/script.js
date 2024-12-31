const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();

  // Optional: Create particle effects when the search is active
  createParticles();
});

// Function to create particles
function createParticles() {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  particle.style.width = `${Math.random() * 10 + 5}px`;
  particle.style.height = particle.style.width;
  particle.style.left = `${Math.random() * 50 + 100}%`;
  particle.style.top = `${Math.random() * 50 + 10}%`;
  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 2500); // Removes the particle after animation
}
