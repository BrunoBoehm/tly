(function(){

  'use strict';

  function CityController(CityFactory, $stateParams, $state){
    var vm = this;

    console.log("Inside CityController")

    vm.test = "It's always a pleasure to introduce a city to you";
    vm.updateCity = updateCity;
    vm.deleteCity = deleteCity;

    activate();

    function activate(){
      console.log("inside city controller activate");
      console.log($stateParams);
      getCity($stateParams.id);
    }

    // Protected functions

    function getCity(id){
      CityFactory.getCity(id)
                  .then(setCity);
    }

    function updateCity(){
      console.log(vm.city);
      console.log($stateParams);
      return CityFactory.updateCity($stateParams.id, vm.city)
                        .then(redirectToCities);
    }

    function deleteCity(){
      return CityFactory.deleteCity($stateParams.id)
                        .then(redirectToCities);
    }

    // Callbacks

    function setCity(data){
      vm.city = data;
    }

    function redirectToCities(){
      $state.go('cities');
    }

  }

  CityController.$inject = ['CityFactory', '$stateParams', '$state'];

  angular
    .module('triplyst')
    .controller('CityController', CityController);


}());
