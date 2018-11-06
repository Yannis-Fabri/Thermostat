//'use strict';

function Thermostat(){
  this.MIN_TEMP = 10
  this.DEFAULT_TEMP = 20
  this.temperature = DEFAULT_TEMP
  this.powerSave = true
  this.YES_POWER_SAVE = 25
  this.NO_POWER_SAVE = 32
  this.MEDIUM = 18
}

Thermostat.prototype.getTemperature = function (){
  return this.temperature
}

Thermostat.prototype.up = function (){
  if (this.maxTemp()){
    return
  }
  this.temperature += 1
}

Thermostat.prototype.down = function (){
  if (this.notBelowMin()){
    return
  }
  this.temperature -= 1
}

Thermostat.prototype.notBelowMin = function (){
  return this.temperature === this.MIN_TEMP
}

Thermostat.prototype.powerSaveOn = function (){
  return this.powerSave === true
}

Thermostat.prototype.switchSaveOff = function (){
  return this.powerSave === false
  console.log(this.powerSave)
}

Thermostat.prototype.switchSaveOn = function (){
  return this.powerSave === true
}

Thermostat.prototype.maxTemp = function (){
  if (this.powerSaveOn() === false){
    return this.temperature === this.YES_POWER_SAVE
  }
  return this.temperature === this.NO_POWER_SAVE
}

Thermostat.prototype.resetTemp = function (){
  this.temperature = this.DEFAULT_TEMP
}

Thermostat.prototype.energyUse = function (){
  if (this.temperature < this.MEDIUM) {
    return 'Low usage';
  }
  if (this.temperature >= this.MEDIUM && this.temperature <= this.YES_POWER_SAVE) {
    return 'Medium usage';
  }
  return 'High usage';
}


//Test
/*function Test(){
  var testing = new Thermostat
  console.log(testing.powerSave)
  for (testing.temperature = 20; testing.temperature < 35; testing.up()){
    testing.maxTemp()
    if (testing.temperature === testing.YES_POWER_SAVE){
      console.log(testing.temperature)
      break;
    }
    console.log(testing.temperature)
  }
}
Test ();*/
