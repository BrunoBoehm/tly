(function(){

  'use strict';

  var editPlace = {
    restrict: 'E',
    templateUrl: 'places/edit.html',
    controller: "PlacesController as vm"
  }

  angular
    .module('triplyst')
    .component('editPlace', editPlace);

}());
