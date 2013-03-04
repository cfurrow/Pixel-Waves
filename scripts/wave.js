function OceanWave(initialY)
{
  this.x           = 0;
  this.y           = initialY || 0;
  this.resolution  = 200;
  this.strokeStyle = "rgba(255,255,255,0.2)";
}

OceanWave.prototype.draw = function(ctx)
{
  if(this.y > ctx.canvas.height){
    this.y = 0;
  }
  var i = 0;
  var lx, ly;
  var step = ctx.canvas.width / this.resolution;
  var factor = Math.random()*0.5 + 0.1;
  lx = i;
  ly = 0;

  ctx.moveTo(0,this.y);
  ctx.lineWidth = 2;
  ctx.strokeStyle = this.strokeStyle;
  ctx.beginPath();
  for(; i< ctx.canvas.width; i+=step)
  {
    ctx.lineTo(lx,ly);
    lx = (2+factor)*i;
    ly = this.y + Math.sin(i);
  }
  ctx.stroke();
}

