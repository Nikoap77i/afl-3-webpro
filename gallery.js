const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');
const lb = document.getElementById('lb');
const lbCap = document.getElementById('lbCap');
let currentIdx = 0;

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const cat = tab.dataset.cat;
    cards.forEach(c => {
      const isMatch = c.dataset.cat === cat;
      c.classList.toggle('show', isMatch);
      c.classList.toggle('hidden', !isMatch);
    });
  });
});

function visibleCards() {
  return Array.from(document.querySelectorAll('.card.show'));
}

function showCard(idx, vis) {
  const c = vis[idx];
  if (!c) return;
  const imgInside = c.querySelector('img');
  if (imgInside) {
    document.getElementById('lbImg').innerHTML = `<img src="${imgInside.src}" class="max-w-full max-h-full object-contain">`;
  }
  lbCap.textContent = c.dataset.caption;
  currentIdx = idx;
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    const vis = visibleCards();
    currentIdx = vis.indexOf(card);
    showCard(currentIdx, vis);
    lb.classList.add('open');
  });
});

document.getElementById('lbClose').addEventListener('click', () => lb.classList.remove('open'));

lb.addEventListener('click', (e) => {
  if (e.target === lb) lb.classList.remove('open');
});

document.getElementById('lbPrev').addEventListener('click', () => {
  const vis = visibleCards();
  currentIdx = (currentIdx - 1 + vis.length) % vis.length;
  showCard(currentIdx, vis);
});

document.getElementById('lbNext').addEventListener('click', () => {
  const vis = visibleCards();
  currentIdx = (currentIdx + 1) % vis.length;
  showCard(currentIdx, vis);
});

document.addEventListener('keydown', (e) => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') lb.classList.remove('open');
  if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});

const params = new URLSearchParams(window.location.search);
const catParam = params.get('cat');
if (catParam) {
  const targetTab = document.querySelector(`.tab[data-cat="${catParam}"]`);
  if (targetTab) targetTab.click();
}
