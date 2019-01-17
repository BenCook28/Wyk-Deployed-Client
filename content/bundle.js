(function() {
	var app = angular.module('wyk', [
		"ui.router",
       	"wyk.auth.signup",
       	"wyk.auth.signin",
       	"wyk.splash.splash",
       	"wyk.ourStory.ourStory",
       	"wyk.careers.careers",
       	"wyk.auth.welcome",
       	"wyk.grossPayAndTaxes.grossPayAndTaxes",
       	"wyk.voluntaryDeductions.voluntaryDeductions",
       	"wyk.housing.housing",
       	"wyk.food.food",
       	"wyk.utilities.utilities",
       	"wyk.transport.transport",
       	"wyk.misc.misc",
       	"wyk.results.results"
	])
	.factory('socket', function(socketFactory){
		var myIoSocket = io.connect('http://localhost:3000');

		var socket = socketFactory({
			ioSocket: myIoSocket
		});
		return socket;
	});

	function config($urlRouterProvider) {
		$urlRouterProvider.otherwise('/splash');
	}

	config.$inject = [ '$urlRouterProvider' ];
	app.config(config);

	var API_BASE = location.hostname === "localhost" ?
		"//localhost:3000/api/" : "//wyk-server-ben-cook.herokuapp.com/api/";
	app.constant('API_BASE', API_BASE);
})();
(function(){
	angular
		.module('wyk.food.food',['ui.router'])
		.config(foodConfig)
		.controller('foodController', foodController)

		function foodConfig($stateProvider) {
			$stateProvider
				.state('food', {
					url: '/food',
					templateUrl: './components/food/food.html',
					controller: foodController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		foodConfig.$inject = ['$stateProvider'];

		function foodController($state) {
			var vm = this;
			vm.previous = function(){
				$state.go('housing');
			}
			vm.next = function(){
				$state.go('utilities');
			}
		};

		foodController.$inject = ['$state'];
})();

(function(){
	angular
		.module('wyk.auth.signin',['ui.router'])
		.config(signinConfig);

		function signinConfig($stateProvider) {
			$stateProvider
				.state('signin', {
					url: '/signin',
					templateUrl: '/components/auth/signin.html',
					controller: SignInController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		signinConfig.$inject = ['$stateProvider'];

		function SignInController($state, UsersService) {
			var vm = this;
			vm.signin = function() {
				UsersService.signin(vm.email, vm.password).then(function(response){
					console.log(response);
					$state.go('welcome');
				});
			};
		}

		SignInController.$inject = ['$state', "UsersService"];
})();
(function(){
	angular
		.module('wyk.auth.signup', ['ui.router'])
		.config(signupConfig);

		function signupConfig($stateProvider) {
			$stateProvider
				.state('signup',{
					url: '/signup',
					templateUrl: '/components/auth/signup.html',
					controller: SignUpController,
					controllerAs: 'ctrl',
					bindToController: this
			});
		}

		signupConfig.$inject = ['$stateProvider'];

		function SignUpController($state, UsersService) {
			var vm = this;
			vm.message = "Sign up for an account!"
			vm.submit = function() {
				console.log(vm.user);
				UsersService.create(vm.email, vm.password).then(function(response){
					console.log('response');
					$state.go('welcome');
				});
			};
		}

		SignUpController.$inject = ['$state', 'UsersService'];
})();
(function() {
	angular.module('wyk')
	.directive('userlinks',
		function() {
			UserLinksController.$inject = [ '$state', '$window', 'CurrentUser', 'SessionToken' ];
			function UserLinksController($state, $window, CurrentUser, SessionToken) {
				var vm = this;
				vm.user = function() {
					return CurrentUser.get();
				};

				vm.signedIn = function() {
					// console.log(vm.user().id);
					return !!(vm.user()._id);
				};

				vm.signedOut = function() {
					return !(vm.user()._id);
				};


				vm.signout = function() {
					CurrentUser.clear();
					SessionToken.clear();
					$window.localStorage.removeItem('token');
					$state.go('signin');
				};
			}

			return {
				scope: {},
				controller: UserLinksController,
				controllerAs: 'ctrl',
				bindToController: true,
				templateUrl: '/components/auth/userlinks.html'
			};
		});
})();
(function(){
	angular
		.module('wyk.auth.welcome',['ui.router'])
		.config(welcomeConfig)
		.controller('welcomeController', welcomeController)

		function welcomeConfig($stateProvider) {
			$stateProvider
				.state('welcome', {
					url: '/welcome',
					templateUrl: './components/auth/welcome.html',
					controller: welcomeController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		welcomeConfig.$inject = ['$stateProvider'];

		function welcomeController($state) {
			var vm = this;
			vm.submit = function(){
				$state.go('grossPayAndTaxes');
			}
		};

		welcomeController.$inject = ['$state'];
})();
// angular.module('marriedRadio', [])
//     .controller('maritalStatusController', ['$scope', function($scope) {
//       $scope.maritalStatus = {
//         name: 'Single'
//       };
//     }]);

// it('should change state', function() {
//   var inputs = element.all(by.model('maritalStatus.name'));
//   var name = element(by.binding('maritalStatus.name'));

//   expect(name.getText()).toContain('single');

//   inputs.get(1).click();
//   expect(name.getText()).toContain('married');

// });

//   var myApp = angular.module('myApp', []);

// use Google Places Autocomplete

// myApp.directive('googleplace', function() {
//     return {
//         require: 'ngModel',
//         link: function(scope, element, attrs, model) {
//             var options = {
//                 types: [],
//                 componentRestrictions: {}
//             };
//             scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

//             google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
//                 scope.$apply(function() {
//                     model.$setViewValue(element.val());                
//                 });
//             });
//         }
//     };
// });
// googleAPI key: AIzaSyCcxhACS4JpWGKsJxJO3E85YGNdTwJwHm4
(function () {
	angular
		.module('wyk.grossPayAndTaxes.grossPayAndTaxes', ['ui.router'])
		.config(grossPayAndTaxesConfig)
		.controller('grossPayAndTaxesController', grossPayAndTaxesController)

	function grossPayAndTaxesConfig($stateProvider) {
		$stateProvider
			.state('grossPayAndTaxes', {
				url: '/gross-pay-and-taxes',
				templateUrl: './components/grossPayAndTaxes/grossPayAndTaxes.html',
				controller: grossPayAndTaxesController,
				controllerAs: 'ctrl',
				bindToController: this
			})
	}

	grossPayAndTaxesConfig.$inject = ['$stateProvider'];

	function grossPayAndTaxesController($state, $http) {
		console.log('$http is', $http);
		var vm = this;
		vm.previous = function () {
			$state.go('welcome');
		}
		vm.next = function () {
			debugger;
			console.log('$http2 is', $http);
			$http.put('/api/add-opportunity')
			$state.go('voluntaryDeductions');
		}
	};

	grossPayAndTaxesController.$inject = ['$state', '$http'];
})();


(function(){
	angular
		.module('wyk.careers.careers',['ui.router'])
		.config(careersConfig);

		function careersConfig($stateProvider) {
			$stateProvider
				.state('careers', {
					url: '/careers',
					templateUrl: '/components/careers/careers.html',
					controller: careersController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		careersConfig.$inject = ['$stateProvider'];

		function careersController($state) {
			var vm = this;
		};

		careersController.$inject = ['$state'];
})();
(function(){
	angular
		.module('wyk.housing.housing',['ui.router'])
		.config(housingConfig)
		.controller('housingController', housingController)

		function housingConfig($stateProvider) {
			$stateProvider
				.state('housing', {
					url: '/housing',
					templateUrl: './components/housing/housing.html',
					controller: housingController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		housingConfig.$inject = ['$stateProvider'];

		function housingController($state) {
			var vm = this;
			vm.previous = function(){
				$state.go('voluntaryDeductions');
			}
			vm.next = function(){
				$state.go('food');
			}
		};

		housingController.$inject = ['$state'];
})();
(function(){
	angular
		.module('wyk.ourStory.ourStory',['ui.router'])
		.config(ourStoryConfig);

		function ourStoryConfig($stateProvider) {
			$stateProvider
				.state('ourStory', {
					url: '/ourstory',
					templateUrl: '/components/ourStory/ourStory.html',
					controller: ourStoryController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		ourStoryConfig.$inject = ['$stateProvider'];

		function ourStoryController($state) {
			var vm = this;
		};

		ourStoryController.$inject = ['$state'];
})();
// (function(){
// 	angular.module('wyk.history', [
// 		'ui.router'
// 		])
// 		.config(historyConfig);
// 		historyConfig.$inject = ['$stateProvider'];
// 		function historyConfig($stateProvider) {

// 			$stateProvider
// 				.state('history', {
// 					url: '/history',
// 					templateUrl: '/components/history/history.html',
// 					controller: HistoryController,
// 					controllerAs: 'ctrl',
// 					bindToController: this,
// 					resolve: {
// 						getUserLogs: [
// 							'LogsService',
// 							function(LogsService) {
// 								return LogsService.fetch();
// 							}
// 						]
// 					}
// 				});
// 		}

// 		HistoryController.$inject = ['$state', 'LogsService'];
// 		function HistoryController($state, LogsService) {
// 			var vm = this;
// 			vm.history = LogsService.getLogs();

// 			vm.delete = function(item) {
// 				LogsService.deleteLogs(item);
// 			};

// 			vm.updateLog = function(item) {
// 				$state.go('logs/update', { 'id': item.id });
// 			};
// 		}
// })();
(function(){
	angular
		.module('wyk.results.results',['ui.router'])
		.config(resultsConfig)
		.controller('resultsController', resultsController)

		function resultsConfig($stateProvider) {
			$stateProvider
				.state('results', {
					url: '/results',
					templateUrl: './components/results/results.html',
					controller: resultsController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		resultsConfig.$inject = ['$stateProvider'];

		function resultsController($state) {
			var vm = this;
			vm.previous = function(){
				$state.go('misc');
			}
			vm.new = function(){
				$state.go('welcome');
			}
		};

		resultsController.$inject = ['$state'];
})();
(function(){
	angular
		.module('wyk.splash.splash',['ui.router', 'ui.bootstrap'])
		.config(splashConfig)
		.controller('CarouselDemoCtrl', CarouselDemoCtrl);

		function CarouselDemoCtrl($scope){
		  $scope.myInterval = 7000;
		  $scope.slides = [
		    {
		      image: '../../img/New York City.jpeg'
		    },
		    {
		      image: '../../img/Chicago.jpeg'
		    },
		    {
		      image: '../../img/Singapore.jpeg'
		    },
		    {
		      image: '../../img/Burb.jpeg'
		    }
		  ];
		}

		function splashConfig($stateProvider) {
			$stateProvider
				.state('splash', {
					url: '/splash',
					templateUrl: '/components/splash/splash.html',
					controller: SplashController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		splashConfig.$inject = ['$stateProvider'];

		function SplashController($state) {
			var vm = this;
		};

		SplashController.$inject = ['$state'];
})();
function add_fields() {
    document.getElementById('wrapper').innerHTML += '<span>Dollar Amount: <input type="number"></span>\r\n';
}
(function(){
	angular
		.module('wyk.misc.misc',['ui.router'])
		.config(miscConfig)
		.controller('miscController', miscController)

		function miscConfig($stateProvider) {
			$stateProvider
				.state('misc', {
					url: '/misc',
					templateUrl: './components/misc/misc.html',
					controller: miscController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		miscConfig.$inject = ['$stateProvider'];

		function miscController($state) {
			var vm = this;
			vm.previous = function(){
				$state.go('transport');
			}
			vm.finish = function(){
				$state.go('results');
			}
		};

		miscController.$inject = ['$state'];
})();
(function(){
	angular
		.module('wyk.utilities.utilities',['ui.router'])
		.config(utilitiesConfig)
		.controller('utilitiesController', utilitiesController)

		function utilitiesConfig($stateProvider) {
			$stateProvider
				.state('utilities', {
					url: '/utilities',
					templateUrl: './components/utilities/utilities.html',
					controller: utilitiesController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		utilitiesConfig.$inject = ['$stateProvider'];

		function utilitiesController($state) {
			var vm = this;
			vm.previous = function(){
				$state.go('food');
			}
			vm.next = function(){
				$state.go('transport');
			}
		};

		utilitiesController.$inject = ['$state'];
})();
(function(){
	angular
		.module('wyk.transport.transport',['ui.router'])
		.config(transportConfig)
		.controller('transportController', transportController)

		function transportConfig($stateProvider) {
			$stateProvider
				.state('transport', {
					url: '/transport',
					templateUrl: './components/transport/transport.html',
					controller: transportController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		transportConfig.$inject = ['$stateProvider'];

		function transportController($state) {
			var vm = this;
			vm.previous = function(){
				$state.go('utilities');
			}
			vm.next = function(){
				$state.go('misc');
			}
		};

		transportController.$inject = ['$state'];
})();
(function(){
	angular
		.module('wyk.voluntaryDeductions.voluntaryDeductions',['ui.router'])
		.config(voluntaryDeductionsConfig)
		.controller('voluntaryDeductionsController', voluntaryDeductionsController)

		function voluntaryDeductionsConfig($stateProvider) {
			$stateProvider
				.state('voluntaryDeductions', {
					url: '/voluntary-deductions',
					templateUrl: './components/voluntaryDeductions/voluntaryDeductions.html',
					controller: voluntaryDeductionsController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		voluntaryDeductionsConfig.$inject = ['$stateProvider'];

		function voluntaryDeductionsController($state) {
			var vm = this;
			vm.previous = function(){
				$state.go('grossPayAndTaxes');
			}
			vm.next = function(){
				$state.go('housing');
			}
		};

		voluntaryDeductionsController.$inject = ['$state'];
})();
(function(){
	angular.module('wyk')
	.factory('AuthInterceptor', ['SessionToken', 'API_BASE',
		function(SessionToken, API_BASE){
			return {
				request: function(config) {
					var token = SessionToken.get();
					if (token && config.url.indexOf(API_BASE) > -1) {
						config.headers['Authorization'] = token;
					}
					return config;
				}
			};
		}]);

	angular.module('wyk')
		.config(['$httpProvider', function($httpProvider) {
			return $httpProvider.interceptors.push('AuthInterceptor');
		}]);
})();
(function() {
	angular.module('wyk')
		.service('CurrentUser', ['$window', function($window) {
			function CurrentUser() {
				var currUser = $window.localStorage.getItem('currentUser');
				if (currUser && currUser !== "undefined") {
					this.currentUser = JSON.parse($window.localStorage.getItem('currentUser'));
				}
			}
			CurrentUser.prototype.set = function(user) {
				this.currentUser = user;
				$window.localStorage.setItem('currentUser', JSON.stringify(user));
			};
			CurrentUser.prototype.get = function() {
				return this.currentUser || {};
			};
			CurrentUser.prototype.clear = function() {
				this.currentUser = undefined;
				$window.localStorage.removeItem('currentUser');
			};
			CurrentUser.prototype.isSignedIn = function() {
				return !!this.get().id;
			};
			return new CurrentUser();
		}]);
})();
(function(){
	angular.module('wyk')
		.service('SessionToken', ['$window', function($window) {
			function SessionToken(){
				this.sessionToken = $window.localStorage.getItem('sessionToken');
			}

			SessionToken.prototype.set = function(token) {
				this.sessionToken = token;
				$window.localStorage.setItem('sessionToken', token);
			};

			SessionToken.prototype.get = function() {
				return this.sessionToken;
			};

			SessionToken.prototype.clear = function() {
				this.sessionToken = undefined;
				$window.localStorage.removeItem('sessionToken');
			};
			return new SessionToken();
		}]);
})();
(function(){
	angular.module('wyk')
		.service('UsersService', [
			'$http', 'API_BASE', 'SessionToken', 'CurrentUser',
			function($http, API_BASE, SessionToken, CurrentUser) {
				function UsersService(){

				}

				UsersService.prototype.create = function(email, password) {
					console.log(email, password);
					var userPromise = $http.post(API_BASE + 'signup', {
						email: email,
						password: password
					});

					userPromise.then(function(response){
						console.log(response);
						SessionToken.set(response.data.token);
						CurrentUser.set(response.data.user);
					});
					return userPromise;
				};

				UsersService.prototype.signin = function(email, password) {
					var signinPromise = $http.post(API_BASE + 'signin',{
						email: email,
						password: password
					});

					signinPromise.then(function(response){

						SessionToken.set(response.data.token);
						CurrentUser.set(response.data.user);
					});
					return signinPromise;
				};
				return new UsersService();
			}]);
})();
//# sourceMappingURL=bundle.js.map
