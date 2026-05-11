document.getElementById('ham').addEventListener('click', function () {
  const menu = document.getElementById('mobMenu');
  if (menu.classList.contains('hidden')) {
    menu.classList.toggle('hidden');
  } else {
    menu.classList.toggle('open');
  }
});
