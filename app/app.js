'use strict';

// Declare app level module which depends on views, and components
angular.module('gameOfDrones', [
  'ngRoute',
  'gameOfDrones.view1',
  'gameOfDrones.view2',
  // 'myApp.version',
  'playerControllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

'use strict';

var playerControllers = angular.module('playerControllers', []);

playerControllers.controller("ReviewController", function(){  
	this.playerOne = '';
	this.playerTwo = '';
});
