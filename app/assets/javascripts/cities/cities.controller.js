(function(){

  'use strict';

  function CitiesController(CityFactory) {
    var vm = this;

    vm.test = "This is the list of all the cities we currently cover. Keep posted there are more to come ;)";

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

    // Callbacks

    function setTweets(response){
      vm.cities = response;
    }

  }

  CitiesController.$inject = ['CityFactory'];

  angular
   .module('triplyst')
   .controller('CitiesController', CitiesController);

}());
