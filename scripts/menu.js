document.getElementById('menu').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  var menuIcon = document.getElementById('menu-icon');
  var dropDown = document.getElementById('drop-down');
  
  if (menu.classList.contains('menu--dropdown')) {
      menu.classList.remove('menu--dropdown');
      menuIcon.src = './public/icon/hamburguer 1.svg';
      dropDown.classList.remove('drop-down--open');
  } else {
      menu.classList.add('menu--dropdown');
      menuIcon.src = './public/icon/cross.svg';
      dropDown.classList.add('drop-down--open');
  }
});
