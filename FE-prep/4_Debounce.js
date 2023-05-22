// Debounce function with uspport for immediate exexution, step by step

// STEP 1: return a debounced version of callback
function debounce(callback, delay, immediate = false) {
    return function(){
      setTimeout(callback, delay)
    }
  }

// STEP 2: clear and reset timer
function debounce(callback, delay, immediate = false) {
  let timerID = null;
  return function(){
    clearTimeout(timerID)
    timerID = setTimeout(callback, delay)
  }
}

// STEP 3: allow passing of arguemnts and this binding
function debounce(callback, delay, immediate = false) {
  let timerID = null;
  return function(...args){
    clearTimeout(timerID)

    timerID = setTimeout(() => {
      callback.call(this, ...args)
    }, delay)
  }
}

// STEP 4: allow immediate execution
function debounce(callback, delay, immediate = false) {
  let timerID = null;
  return function(...args){
    clearTimeout(timerID)

    if(immediate){
      callback.call(this, ...args);
    }

    timerID = setTimeout(() => {
      if(!immediate){
        callback.call(this, ...args)
      }
    }, delay)
  }
}

// STEP 5: reset timer for repeated immediate calls
function debounce(callback, delay, immediate = false) {
  let timerID = null;
  return function(...args){
    clearTimeout(timerID)
    
    let shouldCallImmediately = timerID == null && immediate
    if(shouldCallImmediately){
      callback.call(this, ...args);
    }

    timerID = setTimeout(() => {
      if(!immediate){
        callback.call(this, ...args)
      }
      timerID = null;
    }, delay)
  }
}