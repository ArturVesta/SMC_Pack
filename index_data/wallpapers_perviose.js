function wallBack() {
  let countElement = document.getElementById("counts");
  let count = parseInt(countElement.innerHTML, 10); // Parse as integer
  let location = "index_data/Wallpapers/";
  let format = ".png";
  let listWallpapersLength = listWallpapers.length;
  count--; // Decrement count
  if (count < 0) {
    count--;
    count = listWallpapersLength - 1; // Wrap around to the last image
  }
  countElement.innerHTML = count.toString(); // Update the displayed count
  ex2.src = location + listWallpapers[count] + format;
  if (count === 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "block";
  }
  if (count === listWallpapersLength - 1) {
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "block";
  }
};
function wallNext() {
  let countElement = document.getElementById("counts");
  let count = parseInt(countElement.innerHTML, 10); // Parse as integer
  let location = "index_data/Wallpapers/";
  let format = ".png";
  let listWallpapersLength = listWallpapers.length;
  count++; // Decrement count
  if (count > 222) {
    count = listWallpapersLength - 1; // Wrap around to the last image
  }
  countElement.innerHTML = count.toString(); // Update the displayed count
  ex2.src = location + listWallpapers[count] + format;
  if (count === 222) {
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").style.display = "block";
  }
  if (count === listWallpapersLength + 1) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "block";
  }
//  let count = document.getElementById("counts").innerHTML;
//  var location = "index_data/Wallpapers/";
//  var format = ".png";
//  document.getElementById("counts").innerHTML = ++count;
//  for(var i = 0; i < listWallpapers.length; i++) {
//    if(ex2.src === location + listWallpapers[i] + format) {
//      ex2.src = location + listWallpapers[count] + format;
//    };
//    if(document.getElementById("counts").innerHTML === "0") {//ex2.src === location + listWallpapers[0] + format
//      document.getElementById("prevBtn").style.display = "none";
//    }else
//    if(document.getElementById("counts").innerHTML === "222") {//ex2.src === location + listWallpapers[222] + format
//      document.getElementById("nextBtn").style.display = "none";
//    }else{
//      document.getElementById("prevBtn").style.display = "block";
//      document.getElementById("nextBtn").style.display = "block";
//    };
//  }
};