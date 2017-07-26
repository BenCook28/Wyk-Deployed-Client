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