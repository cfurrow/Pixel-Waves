function Land()
{
  this.width              = 100;
  this.height             = 100;
  this.fillStyle          = "#00d23e"; // green
  this.x                  = 200;
  this.y                  = 100;
  this.drawWaves          = true;
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
      if(this.waves[i].age < 1/this.waves[i].opacityStep){
        this.waves[i].draw(ctx);
      }
      else {
        this.waves.slice(i,1);
      }
    }


  }
}

