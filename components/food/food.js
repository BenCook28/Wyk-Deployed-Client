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