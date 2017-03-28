(function(){

  'use strict';

  // a component is an object, not a function
  // <cities-cards cities="vm.cities"></cities-cards>
  var citiesCards = {
    bindings: {
      cities: "<"
    },
    templateUrl: 'cities/cities-cards.html',
    restrict: 'E',
    controller: 'CitiesController as vm'
  }

  angular
    .module('triplyst')
    .component('citiesCards', citiesCards);
}());
