(function(){

  'use strict';

  function PlacesController(PlaceFactory, $stateParams, id) {
    var vm = this;

    vm.test = "We're on the Place page";

    activate();

    function activate() {
      console.log("We're inside the places controller activate method");
      console.log($stateParams);
      getCityPlace(id, $stateParams.id);
    }

    // Functions

    function getCityPlace(city_id, id) {
      PlaceFactory.getCityPlace(city_id, id)
                  .then(setCityPlace);
    }

    // Callbacks

    function setCityPlace(data) {
      vm.cityPlace = data;
    }

  }

  PlacesController.$inject = ['PlaceFactory'];

  angular
    .module('triplyst')
    .controller('PlacesController', PlacesController);

}());
