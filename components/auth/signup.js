(function(){
	angular
		.module('wyk.auth.signup', ['ui.router'])
		.config(signupConfig);

		function signupConfig($stateProvider) {
			$stateProvider
				.state('signup',{
					url: '/signup',
					templateUrl: '/components/auth/signup.html',
					controller: SignUpController,
					controllerAs: 'ctrl',
					bindToController: this
			});
		}

		signupConfig.$inject = ['$stateProvider'];

		function SignUpController($state, UsersService) {
			var vm = this;
			vm.message = "Sign up for an account!"
			vm.submit = function() {
				console.log(vm.user);
				UsersService.create(vm.email, vm.password).then(function(response){
					console.log('response');
					$state.go('welcome');
				});
			};
		}

		SignUpController.$inject = ['$state', 'UsersService'];
})();