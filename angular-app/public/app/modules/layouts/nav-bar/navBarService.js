(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('github-explorer')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'feature-1',
							name: 'Feature-1'
					},
			    
					{
						link: 'feature-2',
							name: 'Feature-2'
					},
			    
					{
						link: 'feature-3',
							name: 'Feature-3'
					},
			    
					{
						link: 'feature1',
							name: 'Feature1'
					},
			    
					{
						link: 'feature2',
							name: 'Feature2'
					},
			    
					{
						link: 'feature3',
							name: 'Feature3'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
