const copyButtonGif = document.getElementById('copyButtonGif');
copyButtonGif.addEventListener('click', async () => {
  document.getElementById("errorAlert").style.bottom = "30px";
  document.getElementById("errorAlert").innerHTML = "ERROR, Script for copy animated gifs is in progress..." + "<br>" + "While use image context menu that popup when focus or right clicking with mouse.";
  setTimeout(() => {
    document.getElementById("errorAlert").style.transform = "scale(1,0.1)";
    document.getElementById("errorAlert").style.color = "var(--color)";
  },700);
  setTimeout(() => {
    document.getElementById("errorAlert").style.transform = "scale(1,1)";
  },1400);
  setTimeout(() => {
    document.getElementById("errorAlert").style.transform = "scale(1,0.1)";
    document.getElementById("errorAlert").style.color = "transparet";
  },6000);
  setTimeout(() => {
    document.getElementById("errorAlert").style.transform = "scale(0,0.1)";
  },6700);
  setTimeout(() => {
    document.getElementById("errorAlert").innerHTML = "";
  },7400);
});