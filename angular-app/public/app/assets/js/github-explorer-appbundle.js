/*!
* github-explorer - v0.0.1 - MIT LICENSE 2016-10-02. 
* @author PatrickHub
*/
(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('github-explorer', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		 'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
		'feature1',
		'feature2',
		'feature3',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('github-explorer')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
		$urlRouterProvider
			.otherwise('/feature1');
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:feature1Module
	 * @description
	 * # feature1Module
	 * Module of the app
	 */

  	angular.module('feature1', []);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:feature2Module
	 * @description
	 * # feature2Module
	 * Module of the app
	 */

  	angular.module('feature2', ['chart.js']);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:feature3Module
	 * @description
	 * # feature3Module
	 * Module of the app
	 */

  	angular.module('feature3', []);

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

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

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('github-explorer')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			});
			
	}]);

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

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:feature3Ctrl
	* @description
	* # feature3Ctrl
	* Controller of the app
	*/

  	angular
		.module('feature3')
		.controller('Feature3Ctrl', Feature3);

		Feature3.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Feature3() {
			/*jshint validthis: true */
			var vm = this;

		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('github-explorer')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, github-explorer!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LayoutCtrl
	* @description
	* # LayoutCtrl
	* Controller of the app
	*/

	angular
		.module('github-explorer')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog ) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
				.content('Password clicked!')
				.position('top right')
				.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				$mdToast.show(
					$mdToast.simple()
					.content('You said the information was "' + answer + '".')
					.position('top right')
					.hideDelay(2000)
				);

			}, function() {
				$mdToast.show(
					$mdToast.simple()
					.content('You cancelled the dialog.')
					.position('top right')
					.hideDelay(2000)
				);
			});

			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}
		};


		vm.logOut = function () {

			alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:SidenavCtrl
	* @description
	* # SidenavCtrl
	* Controller of the app
	*/
	angular
		.module('github-explorer')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', 'MenuService', '$scope'];
	SettingsCtrl.$inject = ['$mdBottomSheet'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function SidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function() {
			$mdSidenav('left').close();
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.menu = MenuService.listMenu();

		vm.admin = [
			{
				link: 'showListBottomSheet($event)',
				title: 'Settings',
				icon: 'settings'
			}
		];

		vm.navigateTo = function (target) {

			var page = target;

			$state.go(page);

		};

		vm.showSettingsBottom = function ($event) {
			vm.alert = '';
			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-grid" layout="column" ng-cloak><div layout="row" layout-align="center center"><h4>With clickOutsideToClose option, drag down or press ESC to close</h4></div><md-list flex layout="row" layout-align="center center"><md-list-item ng-repeat="item in vm.items"><md-button class="md-grid-item-content" ng-click="vm.listItemClick($index)"><md-icon class="md-48">{{item.icon}}</md-icon><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
				controller: 'SettingsCtrl',
				controllerAs: 'vm',
				targetEvent: $event
			}).then(function (clickedItem) {
				$mdToast.show(
					$mdToast.simple()
					.content(clickedItem.name + ' clicked!')
					.position('top right')
					.hideDelay(2000)
				);
			});
		};

	}

	function SettingsCtrl($mdBottomSheet) {
		/*jshint validthis: true */
		var vm = this;

		vm.items = [
			{name: 'Roles', icon: 'assignment_ind'},
			{name: 'Notes', icon: 'speaker_notes'},
			{name: 'Tasks', icon: 'view_list'},
			{name: 'Inbox', icon: 'inbox'}
		];

		vm.listItemClick = function ($index) {
			var clickedItem = vm.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};
	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:feature1Service
	 * @description
	 * # feature1Service
	 * Service of the app
	 */

  	angular
		.module('feature1')
		.factory('Feature1Service', Feature1);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Feature1.$inject = ['$http'];

		function Feature1 ($http) {

		}

})();

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

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:feature3Service
	 * @description
	 * # feature3Service
	 * Service of the app
	 */

  	angular
		.module('feature3')
		.factory('Feature3Service', Feature3);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Feature3.$inject = ['$http'];

		function Feature3 ($http) {

		}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('github-explorer')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('github-explorer')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'feature-1',
							name: 'Feature-1'
					},
			    
					{
						link: 'feature-2',
							name: 'Feature-2'
					},
			    
					{
						link: 'feature-3',
							name: 'Feature-3'
					},
			    
					{
						link: 'feature1',
							name: 'Feature1'
					},
			    
					{
						link: 'feature2',
							name: 'Feature2'
					},
			    
					{
						link: 'feature3',
							name: 'Feature3'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('github-explorer')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'feature-1',
							name: 'Feature-1'
					},
			    
					{
						link: 'feature-2',
							name: 'Feature-2'
					},
			    
					{
						link: 'feature-3',
							name: 'Feature-3'
					},
			    
					{
						link: 'feature1',
							name: 'Feature1'
					},
			    
					{
						link: 'feature2',
							name: 'Feature2'
					},
			    
					{
						link: 'feature3',
							name: 'Feature3'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
