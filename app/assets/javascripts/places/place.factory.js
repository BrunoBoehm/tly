(function(){

  'use strict';

  function PlaceFactory($http) {

    return {
      getCityPlace: getCityPlace
    }

    // callable functions on the service object

    function getCityPlace(city_id, id){
      return $http.get('/cities/' + city_id + '/places/' + id)
                  .then(handleResponse)
                  .catch(handleError);
    }

    // Callback functions
    function handleResponse(response) {
      console.log(response)
      return response.data
    }

    function handleError(error) {
      console.log(error)
    }

  }

  PlaceFactory.$inject = ['$http'];

  angular
    .module('triplyst')
    .factory('PlaceFactory', PlaceFactory)

}());
