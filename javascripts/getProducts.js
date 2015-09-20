define(['jquery'], function($) {

		return {

			getData: function(callback){

			$.ajax({
		  	url: "../jsons/products.json",
		  	method: "GET",
		  	context: document.body
		  }).done(function(data){

		  		callback(data);

		  }); //end "done"

		 } //end getDeparments

		}//end return statement

}); //end define statement