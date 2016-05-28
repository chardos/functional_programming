Array.prototype.each = function(fn){
  for(var i=0;i<this.length; i++){
    fn(this[i])
  }
}

Array.prototype.map = function(fn, newArr){
  if(!newArr) newArr = [];
  newArr.push( fn(this[0]) );
  var remainingArr = this.slice(1)
  if(this.length > 1) return remainingArr.map(fn, newArr);
  return newArr;
}

Array.prototype.reduce = function(fn, remainingArr, currValue){
  if(currValue) currValue = fn( currValue, this[1] );
  if(!currValue) currValue = fn( this[0], this[1] );
  var remainingArr = this.slice(1);
  if(remainingArr.length > 1) return remainingArr.reduce(fn, remainingArr, currValue)
  return currValue;
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
