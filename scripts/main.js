(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

function step()
{
  var ctx = step.ctx;
  var i   = 0;
  var len = step.lands.length;

  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

  i=0;
  len = step.oceanWaves.length;
  for(;i<len;i++)
  {
    step.oceanWaves[i].y+=0.2;
    step.oceanWaves[i].draw(ctx);
  }

  i=0;
  len = step.lands.length;

  for(;i<len;i++){
    step.lands[i].draw(ctx);
  }

  requestAnimationFrame(step);
}

function init()
{
  var canvas;
  var ctx;
  var land;
  var land2;
  var oceanWaves = 30;

  canvas       = document.getElementById("wave-sim");
  ctx          = canvas.getContext("2d");
  land         = new Land();
  land2        = new Land();
  land2.x      = land.x+150;
  land2.y      = land.y-80;
  land2.width  = 50;
  land2.height = 50;
  land2.waveStepInPixels = 0.1;


  step.ctx     = ctx;
  step.lands   = [];
  step.lands.push(land);
  step.lands.push(land2);
  step.oceanWaves = [];
  for(var i =0; i< oceanWaves; i++){
    step.oceanWaves.push(new OceanWave(20*i));
  }

  // start animation
  requestAnimationFrame(step);
}

