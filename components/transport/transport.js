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