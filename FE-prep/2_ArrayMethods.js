// since you are defining methods on the array prototype, 
// you can access the array using `this`

Array.prototype.myMap = function (callback) {
    // creating a new array to hold the results without mutating the origianl array
    let res = [];
    // run a regular for loop on this and call the callback on each iteration
    // and save/push the results on to res array
    for(let i = 0; i < this.length; i++){
        // callback takes in current element, current index and the original array as its params
      res.push(callback(this[i], i, this))
    }
    // return result
    return res;
  };
  
//   very similar to map
  Array.prototype.myFilter = function (callback) {
    let res = [];
    for(let i = 0; i < this.length; i++){
        // if callback returns true, push the current element from original array on to result
      if(callback(this[i], i, this) === true){
        res.push(this[i])
      }
    }
    return res;
  };
  
//   returns a single value
  Array.prototype.myReduce = function (callback, initialValue) {
    // initially initialized to passed value
    let accumulator = initialValue;
    // run a regular for loop to update the accumulator on each iteration
    for(let i = 0; i < this.length; i++){
    // if initial value undefined on first iter, set it to first element of the array
      if(i === 0 && accumulator === undefined){
        accumulator = this[i]
      }
    //   else, update the accumulator by passing the old accumulator to the callback
      else{
        accumulator = callback(accumulator, this[i], i, this)
      }
    }
    // return the accumulated value
    return accumulator;
  };
  