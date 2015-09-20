define(['jquery', 'getCategories'], function($, getCategories) {

		return {

			populate: function(products){

				console.log('Populate products called using ' + products)

				//filter function - iterates over products and adds a new key "department" based on the category id
				function filterProducts(categories){

						products.products.forEach(function(element){

							// console.log(element);
							var cateId = element.category_id;
							// console.log(cateId);
							categories.categories.forEach(function(ele){

									if (cateId === ele["id"]) {
										console.log(ele["name"])
										element["department"] = ele["name"];
									}

								})// end categories for each

						}) //end products for each

				}; //end getDepartments

				getCategories.getData(filterProducts);

				require(['hbs!../testTemplates/testProducts'], function(template) {
        	$('#content').append(template(products));

        });

			} //end populate

		}//end return statement

}); //end define statement