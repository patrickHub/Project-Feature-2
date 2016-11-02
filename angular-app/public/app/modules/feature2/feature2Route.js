'use strict';

/**
 * @ngdoc function
 * @name app.route:feature2Route
 * @description
 * # feature2Route
 * Route of the app
 */

angular.module('feature2')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('feature2', {
				url:'/feature2',
				templateUrl: 'app/modules/feature2/feature2.html',
				controller: 'Feature2Ctrl',
				controllerAs: 'vm'
			});

		
	}]);
