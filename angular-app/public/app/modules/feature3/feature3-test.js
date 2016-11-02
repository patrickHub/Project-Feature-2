(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:feature3Test
	 * @description
	 * # feature3Test
	 * Test of the app
	 */

	describe('feature3 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('github-explorer');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Feature3Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
