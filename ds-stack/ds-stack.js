var Stack = function()
{
    this._storage =[];
      this.add = function(value)
      {
      	return this._storage.push(value)
      };

      this.remove = function()
      {
      	var top=this._storage.length-1;
  	    this._storage.pop();
  	    return top;
  		}
      
};