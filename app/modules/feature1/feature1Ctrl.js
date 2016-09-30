(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:feature1Ctrl
	* @description
	* # feature1Ctrl
	* Controller of the app
	*/

  	angular
		.module('feature1')
		.controller('Feature1Ctrl', Feature1);

		Feature1.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Feature1() {
			/*jshint validthis: true */
			var vm = this;
            vm.title = "Welcome to GitHub Explorer";
           
		}

})();
