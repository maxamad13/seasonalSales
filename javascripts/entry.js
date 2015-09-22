requirejs.config({
	baseUrl: './javascripts',
	paths:{
'jquery': '../lib/bower_components/jquery/dist/jquery.min',
'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
'lodash': '../lib/bower_components/lodash/lodash.min',
	},

'shim': {
        'bootstrap': ['jquery']
  }

});

require(['jquery','hbs','bootstrap', 'lodash', 'getCategories', 'getProducts', 'populateProducts', 'populateCategories', 'discount'], function($, Handlebars, bootstrap, _, getCategories, getProducts, popProducts, popCategories, discount) {

		//Jim, you need to change the path of the template call in "populateProducts" and in "populateCategories" to link up with the HBS template you wrote, then these calls will populate the full template.
		getProducts.getData(popProducts.populate);
		getCategories.getData(popCategories.populate);




		// $(document).on("change", "#categories", function() {
		// 	console.log($(this).val());
		// });
		$(document).on("change", "#categories", function() {
			var ref = discount.discount;
			getProducts.getData(ref);
		});



});  // end require