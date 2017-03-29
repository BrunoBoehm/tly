(function(){

  'use strict';

  function PlacesController(PlaceFactory, $stateParams, $state) {
    var vm = this;

    // vm.test = "We're on the Place page";
    vm.welcome = "We have a discovered a lot of places around the world, check them out"
    // vm.createPlace = createPlace; belongs in the City controller since for now we create a place from a city
    vm.updatePlace = updatePlace;
    vm.deletePlace = deletePlace;

    activate();

    function activate() {
      if ($stateParams.place_id) {
        getCityPlace($stateParams.id, $stateParams.place_id);
      } else {
        getPlaces();
      }
    }

    // Functions

    function getPlaces() {
      PlaceFactory.getPlaces()
                  .then(setPlaces);
    }

    function getCityPlace(city_id, id) {
      PlaceFactory.getCityPlace(city_id, id)
                  .then(setCityPlace);
    }

    // function createPlace(){
    //   return PlaceFactory.createPlace(vm.newPlace)
    //                       .then(getCity($stateParams.id));
    // }

    function updatePlace() {
      vm.showEditPlace = !vm.showEditPlace;
      PlaceFactory.updatePlace($stateParams.place_id, vm.cityPlace)
                  .then(activate);
    }

    function deletePlace() {
      PlaceFactory.deletePlace($stateParams.place_id)
                  .then(redirectToCity($stateParams.id));
    }

    // Callbacks

    function setCityPlace(data) {
      vm.cityPlace = data;
    }

    function setPlaces(data) {
      vm.places = data;
    }

    function redirectToCity(city_id){
      $state.go('city', {id: city_id});
    }

  }

  PlacesController.$inject = ['PlaceFactory', '$stateParams', '$state'];

  angular
    .module('triplyst')
    .controller('PlacesController', PlacesController);

}());
