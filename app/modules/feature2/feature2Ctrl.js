(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:feature2Ctrl
	* @description
	* # feature2Ctrl
	* Controller of the app
	*/

  	angular
		.module('feature2')
		.controller('Feature2Ctrl', Feature2);

		Feature2.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Feature2() {
			/*jshint validthis: true */
			var vm = this;

			vm.labels = ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday", "Sunday"];
            vm.series = ['Series A', 'Series B'];
            vm.data = [[65, 59, 80, 81, 56, 55, 40],[28, 48, 40, 19, 86, 27, 90]];
			vm.onClick = function (points, evt) {
				console.log(points, evt);
			};
          /*  vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];*/
		  vm.options = {
				scales: {
				yAxes: [
					{
					id: 'y-axis-1',
					type: 'linear',
					display: true,
					position: 'left'
					},
					{
					id: 'y-axis-2',
					type: 'linear',
					display: true,
					position: 'right'
					}
				]
				}
			};

		}	
})();
