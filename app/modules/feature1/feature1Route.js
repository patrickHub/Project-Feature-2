'use strict';

/**
 * @ngdoc function
 * @name app.route:feature1Route
 * @description
 * # feature1Route
 * Route of the app
 */

angular.module('feature1')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('feature1', {
				url:'/feature1',
				templateUrl: 'app/modules/feature1/feature1.html',
				controller: 'Feature1Ctrl',
				controllerAs: 'vm'
			});

		
	}]);
