$(".mm-merchant").remove();
$(".description-text").css("height", "300px");

var alterBackgroundImage = (imageUrl) => {
  const defaultImageUrl =
    "https://e0.pxfuel.com/wallpapers/391/268/desktop-wallpaper-arab-people-camels-world-background.jpg";

  // Update the background image and styles.
  document.body.style.backgroundColor = "#333";
  document.body.style.backgroundImage = `url('${imageUrl || defaultImageUrl}')`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";

  // Update the canvas and game wrap styles.
  const canvasElement = document.getElementById("background-canvas");
  const gameWrapElement = document.getElementById("game-wrap");
  canvasElement.style.backgroundColor = "rgb(67 26 2)";
  canvasElement.style.opacity = "0.65";
  gameWrapElement.style.backgroundColor = "transparent";
};

if (custom_wormworld_background) {
  custom_wormworld_background = JSON.parse(custom_wormworld_background);
  if (custom_wormworld_background.background) {
    alterBackgroundImage(custom_wormworld_background.background);
  } else {
    alterBackgroundImage();
  }
} else {
  alterBackgroundImage();
}
