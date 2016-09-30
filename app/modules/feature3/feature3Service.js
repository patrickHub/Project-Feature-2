(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:feature3Service
	 * @description
	 * # feature3Service
	 * Service of the app
	 */

  	angular
		.module('feature3')
		.factory('Feature3Service', Feature3);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Feature3.$inject = ['$http'];

		function Feature3 ($http) {

		}

})();
