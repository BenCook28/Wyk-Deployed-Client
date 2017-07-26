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