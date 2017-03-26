(function(){
  'use strict';

  function HomeController($scope){
    $scope.name = 'TripLyst'
  }

  HomeController.$inject = ['$scope'];
  // dependencies injection for minified assets in production
  // https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y091

  angular
    .module('triplyst')
    .controller('HomeController', HomeController)

}());
