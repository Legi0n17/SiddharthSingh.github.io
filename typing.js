const texts = ['Penetration Tester.', 'Cybersecurity Researcher.', 'Vulnerability Hunter.', 'Digital Forensics Enthusiast.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typed-text').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 150);
  }
})();

// MENU TOGGLE
const menuToggle = document.getElementById('menu-toggle');
const mainNav   = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});