// Mobile hamburger menu toggle (used on all pages)
document.getElementById('ham').addEventListener('click', function () {
  const menu = document.getElementById('mobMenu');
  // gallery.html uses Tailwind's 'hidden' class; index/my-story use a custom 'open' class
  if (menu.classList.contains('hidden')) {
    menu.classList.toggle('hidden');
  } else {
    menu.classList.toggle('open');
  }
});
