function wallBack() {
  let count = document.getElementById("counts").innerHTML;
  if(window.location.href === "https://arturvesta.github.io/SMC_Pack/index_wallpapers.html") {
    var location = "https://arturvesta.github.io/SMC_Pack/index_data/Wallpapers/";
  }else{// Location for testing the script ! cannot be show for all.
    var location = "file:///C:/Profiles/MNTS/WorkSpacesHTML/SMCPack/index_data/Wallpapers/";
  }
  var format = ".png";
  document.getElementById("counts").innerHTML = --count;
  for(var i = 0; i < listWallpapers.length; i++) {
    if(ex2.src === location + listWallpapers[i] + format) {
      ex2.src = location + listWallpapers[i - 1] + format;
    };
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
function wallNext() {
  let count = document.getElementById("counts").innerHTML;
  if(window.location.href === "https://arturvesta.github.io/SMC_Pack/index_wallpapers.html") {
    var location = "https://arturvesta.github.io/SMC_Pack/index_data/Wallpapers/";
  }else{// Location for testing the script ! cannot be show for all.
    var location = "file:///C:/Profiles/MNTS/WorkSpacesHTML/SMCPack/index_data/Wallpapers/";
  }
  var format = ".png";
  document.getElementById("counts").innerHTML = ++count;
  for(var i = 0; i < listWallpapers.length; i++) {
    if(ex2.src === location + listWallpapers[i] + format) {
      ex2.src = location + listWallpapers[count] + format;
    };
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