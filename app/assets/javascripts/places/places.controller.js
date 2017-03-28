(function(){

  'use strict';

  function PlacesController(PlaceFactory, $stateParams) {
    var vm = this;

    vm.test = "We're on the Place page";
    // vm.createPlace = createPlace;

    activate();

    function activate() {
      getCityPlace($stateParams.id, $stateParams.place_id);
    }

    // Functions

    function getCityPlace(city_id, id) {
      PlaceFactory.getCityPlace(city_id, id)
                  .then(setCityPlace);
    }

    // function createPlace(){
    //   return PlaceFactory.createPlace(vm.newPlace)
    //                       .then(getCity($stateParams.id));
    // }

    // Callbacks

    function setCityPlace(data) {
      vm.cityPlace = data;
    }

  }

  PlacesController.$inject = ['PlaceFactory', '$stateParams'];

  angular
    .module('triplyst')
    .controller('PlacesController', PlacesController);

}());
