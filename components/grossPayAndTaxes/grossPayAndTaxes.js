// angular.module('marriedRadio', [])
//     .controller('maritalStatusController', ['$scope', function($scope) {
//       $scope.maritalStatus = {
//         name: 'Single'
//       };
//     }]);

// it('should change state', function() {
//   var inputs = element.all(by.model('maritalStatus.name'));
//   var name = element(by.binding('maritalStatus.name'));

//   expect(name.getText()).toContain('single');

//   inputs.get(1).click();
//   expect(name.getText()).toContain('married');

// });

//   var myApp = angular.module('myApp', []);

// use Google Places Autocomplete

// myApp.directive('googleplace', function() {
//     return {
//         require: 'ngModel',
//         link: function(scope, element, attrs, model) {
//             var options = {
//                 types: [],
//                 componentRestrictions: {}
//             };
//             scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

//             google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
//                 scope.$apply(function() {
//                     model.$setViewValue(element.val());                
//                 });
//             });
//         }
//     };
// });
// googleAPI key: AIzaSyCcxhACS4JpWGKsJxJO3E85YGNdTwJwHm4
(function(){
	angular
		.module('wyk.grossPayAndTaxes.grossPayAndTaxes',['ui.router'])
		.config(grossPayAndTaxesConfig)
		.controller('grossPayAndTaxesController', grossPayAndTaxesController)

		function grossPayAndTaxesConfig($stateProvider) {
			$stateProvider
				.state('grossPayAndTaxes', {
					url: '/gross-pay-and-taxes',
					templateUrl: './components/grossPayAndTaxes/grossPayAndTaxes.html',
					controller: grossPayAndTaxesController,
					controllerAs: 'ctrl',
					bindToController: this
				});
		}

		grossPayAndTaxesConfig.$inject = ['$stateProvider'];

		function grossPayAndTaxesController($state) {
			var vm = this;
			vm.previous = function(){
				$state.go('welcome');
			}
			vm.next = function(){
				$state.go('voluntaryDeductions');
			}
		};

		grossPayAndTaxesController.$inject = ['$state'];
})();

