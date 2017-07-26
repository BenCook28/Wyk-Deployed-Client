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