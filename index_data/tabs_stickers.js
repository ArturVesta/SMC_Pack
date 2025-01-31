function openSticker(evt, stickerName) {
  var ti, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content-stickers");
  for (ti = 0; ti < tabcontent.length; ti++) {
      tabcontent[ti].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-stickers");
  for (ti = 0; ti < tablinks.length; ti++) {
      tablinks[ti].className = tablinks[ti].className.replace(" active", "");
  }
  document.getElementById(stickerName).style.display = "block";
  evt.currentTarget.className += " active";
}