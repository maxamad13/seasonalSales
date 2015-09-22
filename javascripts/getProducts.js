define(['jquery'], function($) {

		return {

			getData: function(callback){

			$.ajax({
				//
				// NOTE: The url path starts from the directory where
				//       index.html is located.
				//		  	url: "./jsons/products.json",
		  	method: "GET",
		  	context: document.body
		  }).done(function(data){

		  		callback(data);

		  }); //end "done"

		 } //end getDeparments

		}; //end return statement

}); //end define statement