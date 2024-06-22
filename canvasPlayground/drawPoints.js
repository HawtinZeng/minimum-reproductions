const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("point");
const canvasInfo = document.getElementById("canvasInfo");

window.onload = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvasInfo.innerText = `width: ${window.innerWidth}, height: ${window.innerHeight}`;
};

textarea.addEventListener("input", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var string = textarea.value === "" ? "0" : textarea.value;
  eval("var points=" + string);

  points.forEach?.((point) => {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  });
});
