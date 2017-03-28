(function(){

  'use strict';

  function CitiesController(CityFactory, $stateParams, $state) {
    var vm = this;

    vm.test = "This is the list of all the cities we currently cover. Keep posted there are more to come ;)";
    vm.createCity = createCity;

    // Activation: runs at the creation of the controller instance
    activate();

    function activate(){
      getCities();
    }


    // Protected methods

    function getCities(){
      return CityFactory.getCities()
                        .then(setCities);
    }

    function createCity(){
      console.log(vm.newCity);
      return CityFactory.createCity(vm.newCity)
                        .then(getCities);
    }


    // Callbacks

    function setCities(data){
      console.log("setting cities");
      vm.cities = data;
    }

  }

  CitiesController.$inject = ['CityFactory', '$stateParams', '$state'];

  angular
   .module('triplyst')
   .controller('CitiesController', CitiesController);

}());
