define(['jquery'], function($) {

		return {

			populate: function(categories){


				require(['hbs!../templates/categories'], function(template) {
        	$('#cate').append(template(categories));



        });

			} //end populate

		}; //end return statement

}); //end define statement