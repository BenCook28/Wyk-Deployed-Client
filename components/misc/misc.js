function add_fields() {
    document.getElementById('wrapper').innerHTML += '<span>Dollar Amount: <input type="number"></span>\r\n';
}
(function(){
	angular
		.module('wyk.misc.misc',['ui.router'])
		.config(miscConfig)
		.controller('miscController', miscController)

		function miscConfig($stateProvider) {
			$stateProvider
				.state('misc', {
					url: '/misc',
					templateUrl: './components/misc/misc.html',
					controller: miscController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		miscConfig.$inject = ['$stateProvider'];

		function miscController($state) {
			var vm = this;
			vm.previous = function(){
				$state.go('transport');
			}
			vm.finish = function(){
				$state.go('results');
			}
		};

		miscController.$inject = ['$state'];
})();