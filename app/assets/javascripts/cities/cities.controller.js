(function(){

  'use strict';

  function CitiesController(CityFactory, $state, $stateParams) {
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
                        .then(setTweets);
    }

    function createCity(){
      console.log(vm.newCity);
      return CityFactory.createCity(vm.newCity)
                        .then(redirectToCities);
    }


    // Callbacks

    function setTweets(data){
      vm.cities = data;
    }

    function redirectToCities(){
      $state.go('cities');
    }

  }

  CitiesController.$inject = ['CityFactory', '$state', '$stateParams'];

  angular
   .module('triplyst')
   .controller('CitiesController', CitiesController);

}());
