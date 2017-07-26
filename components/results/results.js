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