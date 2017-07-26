(function() {
	angular.module('wyk')
	.directive('userlinks',
		function() {
			UserLinksController.$inject = [ '$state', '$window', 'CurrentUser', 'SessionToken' ];
			function UserLinksController($state, $window, CurrentUser, SessionToken) {
				var vm = this;
				vm.user = function() {
					return CurrentUser.get();
				};

				vm.signedIn = function() {
					// console.log(vm.user().id);
					return !!(vm.user()._id);
				};

				vm.signedOut = function() {
					return !(vm.user()._id);
				};


				vm.signout = function() {
					CurrentUser.clear();
					SessionToken.clear();
					$window.localStorage.removeItem('token');
					$state.go('signin');
				};
			}

			return {
				scope: {},
				controller: UserLinksController,
				controllerAs: 'ctrl',
				bindToController: true,
				templateUrl: '/components/auth/userlinks.html'
			};
		});
})();