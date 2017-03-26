(function(){

  'use strict';

  function CityController(CityFactory, $stateParams){
    var vm = this;

    console.log("Inside CityController")

    vm.test = "It's always a pleasure to introduce a city to you";

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

    // Callbacks

    function setCity(data){
      vm.city = data;
    }

  }

  CityController.$inject = ['CityFactory', '$stateParams'];

  angular
    .module('triplyst')
    .controller('CityController', CityController);


}());
