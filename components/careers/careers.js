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