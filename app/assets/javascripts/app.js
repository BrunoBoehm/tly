(function(){
  'use strict';

  function WelcomeController($scope){
    $scope.name = "TripLyst"
  }

  WelcomeController.$inject = ['$scope'];

  angular
    .module('triplyst', ['ui.router'])
    .controller('WelcomeController', WelcomeController)

}());
