(function(){

  'use strict';

  function CitiesController($scope){
    $scope.city = "Honolulu"
  }

  CitiesController.$inject = ['$scope'];

  angular
   .module('triplyst')
   .controller('CitiesController', CitiesController);

}());
