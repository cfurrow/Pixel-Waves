function Wave(land)
{
  this.sizeMultiple     = 1.5;
  this.width            = land.width  * this.sizeMultiple;
  this.height           = land.height * this.sizeMultiple;
  this.minWidth         = land.width;
  this.minHeight        = land.height;
  this.x                = land.x - (this.width  - land.width)/2;
  this.y                = land.y - (this.height - land.height)/2;
  this.age              = 0;
  this.waveStepInPixels = land.waveStepInPixels || 0.2; 
  this.opacity          = 0.001;
  this.opacityStep      = 0.0001;
  this.isVisible        = true;
}

Wave.prototype.draw = function(ctx)
{
  this.width  -= this.waveStepInPixels;
  this.height -= this.waveStepInPixels;
  this.age++;
  if(this.width > this.minWidth && this.height > this.minHeight){
    this.x      += this.waveStepInPixels/2;
    this.y      += this.waveStepInPixels/2;
    ctx.strokeStyle =  this.calculateStrokeStyle();
    ctx.strokeRect(this.x,this.y,this.width,this.height);
  }
  else{
    this.isVisible = false;
  }
}

Wave.prototype.calculateStrokeStyle = function()
{
  this.opacity = this.opacity + (this.age * this.opacityStep);
  return "rgba(255,255,255,"+this.opacity+")";
}

