(function(){

  'use strict';

  var placeCard = {
    templateUrl: "places/place-card.html",
    controllerAs: "vm",
    restrict: 'E',
    bindings: {
      name: '=',
      description: '=',
      place_id: '='
    }
  }

  angular
    .module('triplyst')
    .component('placeCard', placeCard);

}());
