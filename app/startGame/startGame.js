'use strict';

angular.module('gameOfDrones.startGame', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startGame', {
    templateUrl: 'startGame/startGame.html',
    controller: 'startGameCtrl'
  });
}])

.controller('startGameCtrl', [function() {

}]);