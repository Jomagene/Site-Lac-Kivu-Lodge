function myClick(option_order) {
  var x = document.getElementsByClassName("menu");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display="none";
  }
  document.getElementById(option_order).style.display="flex";
}
function myClicke(option_order) {
  var x = document.getElementsByClassName("special");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display="none";
  }
  document.getElementById(option_order).style.display="flex";
}