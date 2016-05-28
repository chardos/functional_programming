Array.prototype.each = function(fn){
  for(var i=0;i<this.length; i++){
    fn(this[i])
  }
}

Array.prototype.map = function(fn, newArr){
  //create a new Array
  if(!newArr) newArr = [];
  //iterate over oldArray and apply function to it
  newArr.push( fn(this[0]) );
  var remainingArr = this.slice(1)
  if(this.length > 1){
    return remainingArr.map(fn, newArr);
  }
  return newArr;
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
