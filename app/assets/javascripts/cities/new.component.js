(function(){

  'use strict';

  var newCity = {
    templateUrl: "cities/new.html",
    restrict: "E",
    controller: "CitiesController as vm"
  }


  angular
    .module('triplyst')
    .component('newCity', newCity);

}());
