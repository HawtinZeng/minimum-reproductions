const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const drawEle = document.getElementById("draw");
const inputEle = document.getElementById("point");

window.onload = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

drawEle.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var string = inputEle.value === "" ? "0" : inputEle.value;
  eval("var points=" + string);

  points.forEach?.((point) => {
    ctx.fillStyle = "red";
    ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
    ctx.fill();
  });
});
