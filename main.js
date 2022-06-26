const links = document.querySelectorAll("li");
const vectorsHolder = document.getElementById("vectors-holder");
const designToolsClasses = [
  "fa-solid fa-compass-drafting",
  "fa-solid fa-crop-simple",
  "fa-solid fa-pen-nib",
  "fa-solid fa-pen-ruler",
  "fa-solid fa-bezier-curve",
  "fa-solid fa-wand-magic-sparkles",
];

// Create And Append Vectors
for (let i = 0; i < designToolsClasses.length; i++) {
  let vector = document.createElement("i");
  vector.className = designToolsClasses[i];

  vector.classList.add("vector");

  vector.style.top = `${randomNumberTop()}%`;
  vector.style.left = `${randomNumberLeft()}%`;

  //   Change Position A Vector
  vector.addEventListener("mouseenter", () => {
    vector.style.top = `${randomNumberTop()}%`;
    vector.style.left = `${randomNumberLeft()}%`;
  });

  vectorsHolder.append(vector);
}

// Random Number
function randomNumberTop() {
  return Math.floor(Math.random() * 47);
}

// Random Number
function randomNumberLeft() {
  return Math.floor(Math.random() * 99);
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    alert("Friw Kriiw 👽😆");
  });
});
