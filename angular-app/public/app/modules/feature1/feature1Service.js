(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:feature1Service
	 * @description
	 * # feature1Service
	 * Service of the app
	 */

  	angular
		.module('feature1')
		.factory('Feature1Service', Feature1);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Feature1.$inject = ['$http'];

		function Feature1 ($http) {

		}

})();
