function Land()
{
  this.width              = 100;
  this.height             = 100;
  this.fillStyle          = "#00d23e"; // green
  this.x                  = 0;
  this.y                  = 0;
  this.drawWaves          = true;
  this.waveStepInPixels   = 0.4; // each animation loop, move this much?
  this.waves              = [];
  this.waveCycle          = 0;
}

Land.prototype.draw = function(ctx)
{
  ctx.fillStyle = this.fillStyle;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  if(this.drawWaves)
  {
    var i = 0;
    var len = this.waves.length;
    this.waveCycle++;
    if(this.waveCycle % 60 == 0){
      this.waves.push(new Wave(this));
      len + 1;
    }

    for(;i<len;i++)
    {
      this.waves[i].width  += this.waveStepInPixels;
      this.waves[i].height += this.waveStepInPixels;
      ctx.strokeStyle      =  this.waves[i].strokeStyle;
      ctx.strokeRect(this.x,this.y,this.waves[i].width,this.waves[i].height);
    }


  }
}

