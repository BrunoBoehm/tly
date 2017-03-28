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

    // gets called with an id parameter from the controller
    function getCity(id){
      return $http.get('/cities/' + id)
                  .then(handleResponse)
                  .catch(handleError);
    }

    function createCity(newCity){
      var request = {
        method: "POST",
        url: "/cities",
        data: {
          city: newCity
        },
        headers: {
          "Content-Type": "application/json"
        }
      };

      return $http(request)
                    .catch(handleError);
    }

    function updateCity(id, updatedCity){
      var url = "/cities/" + id;

      var request = {
        method: "PUT",
        url: url,
        data: {
          city: updatedCity
        },
        headers: {
          "Content-Type": "application/json"
        }
      };

      return $http(request)
                  .then(handleResponse)
                  .catch(handleError);
    }

    function deleteCity(){

    }

    // Callbacks
    function handleResponse(response){
      console.log("City Factory handling response:")
      console.log(response)
      return response.data
    }

    function handleError(error){
      console.log(error)
    }

  }

  CityFactory.$inject = ['$http'];

  angular
    .module('triplyst')
    .factory('CityFactory', CityFactory)

}());
