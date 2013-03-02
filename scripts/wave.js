function Wave(land)
{
  this.width            = land.width;
  this.height           = land.height;
  this.x                = land.x;
  this.y                = land.y;
  this.age              = 0;
  this.waveStepInPixels = 0.4; // each animation loop, move this much?
  this.opacity          = 0.4;
  this.opacityStep      = 0.0001;
}

Wave.prototype.draw = function(ctx)
{
  this.width  += this.waveStepInPixels;
  this.height += this.waveStepInPixels;
  this.x      -= this.waveStepInPixels/2;
  this.y      -= this.waveStepInPixels/2;
  this.age++;
  ctx.strokeStyle =  this.calculateStrokeStyle();
  ctx.strokeRect(this.x,this.y,this.width,this.height);
}

Wave.prototype.calculateStrokeStyle = function()
{
  this.opacity = this.opacity - (this.age * this.opacityStep);
  return "rgba(255,255,255,"+this.opacity+")";
}

