define(['jquery'], function($) {

		return {


			discount: function(productData){

				var chosen = $('#categories').find(':selected')[0];
				var seasonalDis = chosen.value;
				var idToCheck = chosen.id;
				idToCheck = Number(idToCheck.split('')[8]);


				productData.products.forEach(function(element){

					if (element['category_id'] == idToCheck) {


						element['price'] = (element['price'] * (1 - seasonalDis)).toFixed(2);



					}


				});


				require(['hbs!../testTemplates/prices'], function(template) {
        	$('#prices').html(template(productData));

        });





        }  //end discount

		}; //end return statement

}); //end define statement