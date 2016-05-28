Array.prototype.reduce = function(fn, remainingArr, currValue){
  if(currValue) currValue = fn( currValue, this[1] );
  if(!currValue) currValue = fn( this[0], this[1] );
  var remainingArr = this.slice(1);
  if(remainingArr.length > 1) return remainingArr.reduce(fn, remainingArr, currValue)
  return currValue;
}
