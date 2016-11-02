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
			return {
				getReposNumber: getReposNumber
			};
			
			function getReposNumber() {
				return $http.get("https://blooming-earth-98873.herokuapp.com/api/repos/total")
					.then(function(response) {
						alert("i'm in." + response.data.length)
						console.log(response.data);
						return response;
					})
					.catch(function(error) {
						alert("Error retrieving repos numbers :  " + error);
					});
				}
			}

})();
