(function(){

  'use strict';

  // a component is an object, not a function
  var citiesCards = {
    templateUrl: 'cities/cities-cards.html',
    restrict: 'E',
    controller: 'CitiesController as vm'
  }

  angular
    .module('triplyst')
    .component('citiesCards', citiesCards);
}());
