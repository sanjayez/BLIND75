class EventTarget {
    constructor() {
      // an empty map to hold multiple eventListeners 
      this.events = {};
    }
  
    // add the callbacks to a set so that no duplicates exist
    // and the value for each eventListener property is the set of callbacks
    addEventListener(name, callback) {
      if (!this.events.hasOwnProperty(name)) {
        this.events[name] = new Set([callback]);
      } else {
        this.events[name].add(callback);
      }
    }  

    // remove the callbaks from the eventListner set
    removeEventListener(name, callback) {
      this.events[name]?.delete(callback);
    }
  
    // for each callback in the set of listeners, call them
    dispatchEvent(name) {
      this.events[name]?.forEach((callback) => {
        callback();
      });
    }
  }