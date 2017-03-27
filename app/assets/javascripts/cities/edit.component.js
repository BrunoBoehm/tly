(function(){

  'use strict';

  var editCity = {
    restrict: 'E',
    templateUrl: 'cities/edit.html',
    controller: "CityController as vm"
  }

  angular
    .module('triplyst')
    .component('editCity', editCity);

}());
