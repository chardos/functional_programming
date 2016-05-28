Array.prototype.each = function(fn){
  for(var i=0;i<this.length; i++){
    fn(this[i])
  }
}


Array.prototype.allSame = function(){

}

Array.prototype.allSame = function(){
  var first = this[0];
  for(var i=0;i<this.length; i++){
    if( this[i] !== first ) return false;
  }
  return true;
}
