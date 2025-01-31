function openAvatar(evt, avatarName) {
  var ti, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content-avatars");
  for (ti = 0; ti < tabcontent.length; ti++) {
      tabcontent[ti].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-avatars");
  for (ti = 0; ti < tablinks.length; ti++) {
      tablinks[ti].className = tablinks[ti].className.replace(" active", "");
  }
  document.getElementById(avatarName).style.display = "block";
  evt.currentTarget.className += " active";
}