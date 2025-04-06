document.getElementById("btnlocatestickers").onclick = function() {
  var btnClose = document.getElementById("btnclosewindows");
  document.getElementById("iStickers").style.right = "0%";
  document.getElementById("plustitle").style.opacity = "0";
  btnClose.style.marginTop = "0%";
  btnClose.style.borderBottom = "none";
}