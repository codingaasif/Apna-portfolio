let typed = document.getElementById("text");
let texts = ["Software Developer", "YouTuber", "Web Developer"];
let currentTextIndex = 0;
let currentCharIndex = 0;

function type() {
  if (currentTextIndex < texts.length) {
    if (currentCharIndex < texts[currentTextIndex].length) {
      typed.textContent += texts[currentTextIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1000);
    }
  }
}

function erase() {
  if (currentCharIndex >= 0) {
    typed.textContent = texts[currentTextIndex].substring(0, currentCharIndex);
    currentCharIndex--;
    setTimeout(erase, 50);
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}
type();

const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
