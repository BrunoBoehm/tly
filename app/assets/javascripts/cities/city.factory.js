(function(){

  'use strict';

  function CityFactory($http) {
    return{
      getCities: getCities,
      getCity: getCity,
      createCity: createCity,
      updateCity: updateCity,
      deleteCity: deleteCity
    }

    // Callable functions on the service object
    function getCities(){
      return $http.get('/cities')
                  .then(handleResponse)
                  .catch(handleError);
    }

    function getCity(){

    }

    function createCity(){

    }

    function updateCity(){

    }

    function deleteCity(){

    }

    // Callbacks
    function handleResponse(response){
      console.log(response)
      return response.data
    }

    function handleError(){
      console.log(error)
    }

  }

  CityFactory.$inject = ['$http'];

  angular
    .module('triplyst')
    .factory('CityFactory', CityFactory)

}());