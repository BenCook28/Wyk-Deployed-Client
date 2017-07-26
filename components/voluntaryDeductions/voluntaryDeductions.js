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