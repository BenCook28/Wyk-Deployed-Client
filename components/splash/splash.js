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