var menubtn = document.getElementById("menubtn");
var nav = document.getElementById("nav");

menubtn.onclick = function() {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
};
function show(BoxId){
  document.getElementById("home").style.display = "none";
  document.getElementById("abt").style.display = "none";
  document.getElementById("free").style.display = "none";
  document.getElementById("li").style.display = "none";
  document.getElementById(BoxId).style.display = "block";
}