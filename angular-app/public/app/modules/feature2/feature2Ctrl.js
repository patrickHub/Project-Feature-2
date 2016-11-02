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

		Feature2.$inject = ['Feature2Service'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Feature2(Feature2Service) {
			/*jshint validthis: true */
         
			var vm = this;

		    vm.labels = ["2008","2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];
            vm.series = ['wasadigi'];
            vm.data = [[0, 0, 0, 0, 4, 3, 8, 7, 8]];
		    
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
