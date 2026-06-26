document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('[data-team-search]');
  if (search) {
    const cards = document.querySelectorAll('[data-team-card]');
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
});
