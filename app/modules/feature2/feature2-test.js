(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:feature2Test
	 * @description
	 * # feature2Test
	 * Test of the app
	 */

	describe('feature2 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('github-explorer');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Feature2Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
