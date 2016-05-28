Array.prototype.each = function(fn){
  for(var i=0;i<this.length; i++){
    fn(this[i])
  }
}

Array.prototype.allSame = function(comparedValue){
  if(!comparedValue) return this.allSame(this[0])

  if(this[0] !== comparedValue) return false;
  if(this.length > 1){
    var remainingList = this.slice(1);
    return remainingList.allSame(this[0])
  }
  return true;
}

Array.prototype.map = function(){

}
