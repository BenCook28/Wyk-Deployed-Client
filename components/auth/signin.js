(function(){
	angular
		.module('wyk.auth.signin',['ui.router'])
		.config(signinConfig);

		function signinConfig($stateProvider) {
			$stateProvider
				.state('signin', {
					url: '/signin',
					templateUrl: '/components/auth/signin.html',
					controller: SignInController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		signinConfig.$inject = ['$stateProvider'];

		function SignInController($state, UsersService) {
			var vm = this;
			vm.signin = function() {
				UsersService.signin(vm.email, vm.password).then(function(response){
					console.log(response);
					$state.go('welcome');
				});
			};
		}

		SignInController.$inject = ['$state', "UsersService"];
})();