function showImage(imgs) {
  if(window.location.href === "https://arturvesta.github.io/SMC_Pack/index_wallpapers.html") {
    var location = "https://arturvesta.github.io/SMC_Pack/index_data/Wallpapers/";
  }else{// Location for testing the script ! cannot be show for all.
    var location = "file:///C:/Profiles/MNTS/WorkSpacesHTML/SMCPack/index_data/Wallpapers/";
  }
  var format = ".png";
  ex2.src = imgs.src;
  imagepreviewbase.style.left = "0%";
  document.body.style.overflowY = "hidden";
  document.getElementById("counts").innerHTML = imgs.alt;
  setTimeout(() => {
    imagepreviewbase.style.backgroundColor = "var(--opacity-color)";
    imagepreviewbase.style.backdropFilter = "blur(5px)";
  },340);
  for(var i = 0; i < listWallpapers.length; i++) {
    if(ex2.src === location + listWallpapers[0] + format) {
      document.getElementById("prevBtn").style.display = "none";
    }else
    if(ex2.src === location + listWallpapers[216] + format) {
      document.getElementById("nextBtn").style.display = "none";
    }else{
      document.getElementById("prevBtn").style.display = "block";
      document.getElementById("nextBtn").style.display = "block";
    };
  }
};
function closeImgPreview() {
  var imagepreviewbase = document.getElementById("imagepreviewbase");
  imagepreviewbase.style.backgroundColor = "transparent";
  imagepreviewbase.style.backdropFilter = "blur(0px)";
  setTimeout(() => {
    imagepreviewbase.style.left = "-100%";
    document.body.style.overflowY = "auto";
  },340);
};