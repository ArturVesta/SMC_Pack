const listIvan = [
"00000906","00001085","00002335","00003386","00004379","00005912","00007596","00007794","00007921","00010201",
"00010953","00012636","00014512","00015374","00018412","00018643"
];
function loadIvan() {
  for(var i = 0; i < listIvan.length; i++) {
    var location = "index_data/Stickers/Ivan/";
    var format = ".png";
    const list = document.getElementById("IvanSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listIvan[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}