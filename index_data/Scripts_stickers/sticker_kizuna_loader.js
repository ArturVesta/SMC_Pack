const listKizuna = [
"00001779","00006293","00006912","00008137_0","00008391","00009736","00009786","00010462","00011317","00013343",
"00014581","00015434","00016642"
];
function loadKizuna() {
  for(var i = 0; i < listKizuna.length; i++) {
    var location = "index_data/Stickers/Kizuna/";
    var format = ".png";
    const list = document.getElementById("KizunaSlist");
    const asset = document.createElement('img');
    asset.classList = "sticker";
    asset.src = location + listKizuna[i] + format;
    asset.setAttribute("alt", i);
    asset.onclick = function() {
      showImage(this);
    }
    list.appendChild(asset);
  }
}