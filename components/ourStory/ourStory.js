(function(){
	angular
		.module('wyk.ourStory.ourStory',['ui.router'])
		.config(ourStoryConfig);

		function ourStoryConfig($stateProvider) {
			$stateProvider
				.state('ourStory', {
					url: '/ourstory',
					templateUrl: '/components/ourStory/ourStory.html',
					controller: ourStoryController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		ourStoryConfig.$inject = ['$stateProvider'];

		function ourStoryController($state) {
			var vm = this;
		};

		ourStoryController.$inject = ['$state'];
})();