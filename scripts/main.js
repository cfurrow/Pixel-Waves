(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

function step()
{
  var ctx = step.ctx;
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

  step.land.draw(ctx);

  requestAnimationFrame(step);
}

function init()
{
  var canvas;
  var ctx;
  var land;

  canvas = document.getElementById("wave-sim");
  ctx    = canvas.getContext("2d");
  land   = new Land();

  step.ctx  = ctx;
  step.land = land;

  // start animation
  requestAnimationFrame(step);
}

