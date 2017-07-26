(function(){
	angular
		.module('wyk.splash.splash',['ui.router'])
		.config(splashConfig);

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