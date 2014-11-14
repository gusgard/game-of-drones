'use strict';

angular.module('gameOfDrones.playerTurn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/playerTurn', {
    templateUrl: 'playerTurn/playerTurn.html',
    controller: 'playerTurnCtrl'
  });
}])

.controller('playerTurnCtrl', [function() {

}]);