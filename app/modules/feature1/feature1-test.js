(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:feature1Test
	 * @description
	 * # feature1Test
	 * Test of the app
	 */

	describe('feature1 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('github-explorer');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Feature1Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
