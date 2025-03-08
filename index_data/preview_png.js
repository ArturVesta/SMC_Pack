function showImage(imgs) {
  ex2.src = imgs.src;
  imagepreviewbase.style.left = "0%";
  document.body.style.overflowY = "hidden";
  document.getElementById("counts").innerHTML = imgs.alt;
  setTimeout(() => {
    imagepreviewbase.style.backgroundColor = "var(--opacity-color)";
    imagepreviewbase.style.backdropFilter = "blur(5px)";
  },340);
  if(document.getElementById("counts").innerHTML === "0") {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "block";
  }else
  if(document.getElementById("counts").innerHTML === "222") {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("prevBtn").style.display = "block";
  }else{
    document.getElementById("prevBtn").style.display = "block";
    document.getElementById("nextBtn").style.display = "block";
  };
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