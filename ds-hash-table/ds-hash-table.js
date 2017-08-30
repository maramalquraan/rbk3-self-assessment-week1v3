var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value)
      {
       var box=this._storage.get(hashFn(key, value));
       if(!box)
       {
        box=[[key, value]];
       }
       var check=false;
       for (var i = 0; i < box.length; i++) {
         var tuple = box[i];
         if(tuple[0]===key)
         {
          check=true;
          tuple[1]=value;
          break;
         }
       }
       if(!check)
       {
        box.push([key, value]);
       }
      }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};