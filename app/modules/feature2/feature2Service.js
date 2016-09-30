(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:feature2Service
	 * @description
	 * # feature2Service
	 * Service of the app
	 */

  	angular
		.module('feature2')
		.factory('Feature2Service', Feature2);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Feature2.$inject = ['$http'];

		function Feature2 ($http) {

		}

})();
