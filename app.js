(function() {
	var app = angular.module('wyk', [
		"ui.router",
       	"wyk.auth.signup",
       	"wyk.auth.signin",
       	"wyk.splash.splash",
       	"wyk.ourStory.ourStory",
       	"wyk.careers.careers",
       	"wyk.auth.welcome",
       	"wyk.grossPayAndTaxes.grossPayAndTaxes",
       	"wyk.voluntaryDeductions.voluntaryDeductions",
       	"wyk.housing.housing",
       	"wyk.food.food",
       	"wyk.utilities.utilities",
       	"wyk.transport.transport",
       	"wyk.misc.misc",
       	"wyk.results.results"
	])
	.factory('socket', function(socketFactory){
		var myIoSocket = io.connect('http://localhost:3000');

		var socket = socketFactory({
			ioSocket: myIoSocket
		});
		return socket;
	});

	function config($urlRouterProvider) {
		$urlRouterProvider.otherwise('/splash');
	}

	config.$inject = [ '$urlRouterProvider' ];
	app.config(config);

	var API_BASE = location.hostname === "localhost" ?
		"//localhost:3000/api/" : "//wyk-client.herokuapp.com/api/";
	app.constant('API_BASE', API_BASE);
})();