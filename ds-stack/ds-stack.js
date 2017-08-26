var Stack = function() {
    this._storage =[];
    this.add = function(value){
    	this._storage.push(value)
      // write me
    };
    this.remove = function(value) {
    	this._storage.pop(value);
      // write me
    };
  };