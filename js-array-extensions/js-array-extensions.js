// your code here

function array(arr){
	var array = arr;

	return{
		first: function ()
		{
			return array[0];
		},

		last: function ()
		{
			return array[array.length-1];
		}
	}

}

