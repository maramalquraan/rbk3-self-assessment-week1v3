var Stack = function() {
    this._storage =[];
    this.add = function(value){
    	this._storage.push(value)
      // write me
    };
    this.remove = function(value) {
		for (var i = 0; i < this._storage.length; i++) {
			if (value ===this._storage[i])
				return this._storage.splice(i);
		}
		       // write me
    };
  };