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
