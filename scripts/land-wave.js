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
  this.opacityStep      = 0.00001;
  this.isVisible        = true;
  this.resolution       = 50;
}

Wave.prototype.draw = function(ctx)
{
  var i = 0;
  var lx, ly;
  this.width  -= this.waveStepInPixels;
  this.height -= this.waveStepInPixels;
  this.age++;
  if(this.width > this.minWidth && this.height > this.minHeight){
    this.x      += this.waveStepInPixels/2;
    this.y      += this.waveStepInPixels/2;
    ctx.strokeStyle =  this.calculateStrokeStyle();

    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.moveTo(0,0);
    ctx.beginPath();
    lx = 0;
    ly = 0;
    for(i=0;i<this.width;i++)
    {
      ctx.lineTo(lx,ly); 
      lx = i;
      ly = Math.sin(i);
    }
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(this.x+this.width,this.y);
    ctx.rotate(90*(Math.PI/180));
    ctx.moveTo(0,0);
    lx = 0;
    ly = 0;
    for(i=0;i<this.height;i++)
    {
      ctx.lineTo(lx,ly); 
      lx = i;
      ly = Math.sin(i);
    }
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(this.x+this.width,this.y+this.height);
    ctx.rotate(180*(Math.PI/180));
    ctx.moveTo(0,0);
    lx = 0;
    ly = 0;
    for(i=0;i<this.width;i++)
    {
      ctx.lineTo(lx,ly); 
      lx = i;
      ly = Math.sin(i);
    }
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(this.x,this.y+this.height);
    ctx.rotate(270*(Math.PI/180));
    ctx.moveTo(0,0);
    lx = 0;
    ly = 0;
    for(i=0;i<this.height;i++)
    {
      ctx.lineTo(lx,ly); 
      lx = i;
      ly = Math.sin(i);
    }
    ctx.stroke();
    ctx.restore();
    //ctx.strokeRect(this.x,this.y,this.width,this.height);
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

