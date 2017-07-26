(function(){
	angular.module('wyk')
		.service('UsersService', [
			'$http', 'API_BASE', 'SessionToken', 'CurrentUser',
			function($http, API_BASE, SessionToken, CurrentUser) {
				function UsersService(){

				}

				UsersService.prototype.create = function(email, password) {
					console.log(email, password);
					var userPromise = $http.post(API_BASE + 'signup', {
						email: email,
						password: password
					});

					userPromise.then(function(response){
						console.log(response);
						SessionToken.set(response.data.token);
						CurrentUser.set(response.data.user);
					});
					return userPromise;
				};

				UsersService.prototype.signin = function(email, password) {
					var signinPromise = $http.post(API_BASE + 'signin',{
						email: email,
						password: password
					});

					signinPromise.then(function(response){

						SessionToken.set(response.data.token);
						CurrentUser.set(response.data.user);
					});
					return signinPromise;
				};
				return new UsersService();
			}]);
})();