define(['jquery'], function($) {

		return {


			discount: function(productData){

				console.log('discount called');

				var discountPercentage = $("#categories_list").discount;
				console.log(discountPercentage);

        }  //end discount

		}//end return statement

}); //end define statement