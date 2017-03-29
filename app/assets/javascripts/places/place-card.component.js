(function(){

  'use strict';

  var placeCard = {
    templateUrl: "places/place-card.html",
    controller: "PlacesController as vm",
    restrict: 'E',
    bindings: {
      name: '=',
      description: '=',
      cityid: '=',
      placeid: '=',
      city: '='
      // very important not to use case or - _ in bindings
    }
  }

  angular
    .module('triplyst')
    .component('placeCard', placeCard);

}());
