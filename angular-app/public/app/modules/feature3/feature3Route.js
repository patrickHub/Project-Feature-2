'use strict';

/**
 * @ngdoc function
 * @name app.route:feature3Route
 * @description
 * # feature3Route
 * Route of the app
 */

angular.module('feature3')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('feature3', {
				url:'/feature3',
				templateUrl: 'app/modules/feature3/feature3.html',
				controller: 'Feature3Ctrl',
				controllerAs: 'vm'
			});

		
	}]);
