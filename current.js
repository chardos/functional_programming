Array.prototype.reduce = function(fn, remainingArr, currValue){
  currValue = currValue || 0;
  currValue = fn(currValue, this[0]);
  var remainingArr = this.slice(1);
  if(remainingArr.length > 0) return remainingArr.reduce(fn, remainingArr, currValue)
  return currValue;
}
