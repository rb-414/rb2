
function scrollToGallery() {
  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}
document.querySelectorAll('.glow-text span').forEach((s, i) => {
  s.style.setProperty('--i', i);
});
document.getElementById('scroll-left').onclick = () => {
  document.getElementById('cards').scrollBy({ left: -300, behavior: 'smooth' });
};
document.getElementById('scroll-right').onclick = () => {
  document.getElementById('cards').scrollBy({ left: 300, behavior: 'smooth' });
};
const modal = document.getElementById('loginModal');
document.getElementById('loginLink').onclick = (e) => { e.preventDefault(); modal.style.display = "block"; };
document.querySelector('.close').onclick = () => { modal.style.display = "none"; };
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
function login() {
  const username = document.getElementById('username').value;
  alert("Logged in as " + username + " (Demo)");
  modal.style.display = "none";
}
document.getElementById('searchInput').addEventListener('input', () => {
  const query = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(query) ? "block" : "none";
  });
});
function aiSuggest() {
  alert("🔮 AI Suggestion: Try connecting your work with sustainable tech or health applications!");
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}
