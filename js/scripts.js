function menuToggle() {
  var x = document.getElementById("headerright");
  if (x.className === 'header-right') {
  x.className += " responsive";
} else {
  x.className = 'header-right';
}
}
