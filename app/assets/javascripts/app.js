(function(){
  'use strict';

  function WelcomeController($scope){
    $scope.name = "TripLyst"
  }

  angular
    .module('triplyst', ['ui.router'])
    .controller('WelcomeController', WelcomeController)

}());
