(function(){
  'use strict';

  function WelcomeController($scope){
    $scope.name = "TripLyst"
  }

  WelcomeController.$inject = ['$scope'];
  // dependencies injection for minified assets in production
  // https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y091

  angular
    .module('triplyst', ['ui.router'])
    .controller('WelcomeController', WelcomeController)

}());
