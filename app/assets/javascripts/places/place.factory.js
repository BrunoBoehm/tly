(function(){

  'use strict';

  function PlaceFactory($http) {

    return {
      getCityPlace: getCityPlace,
      createPlace: createPlace
    }

    // callable functions on the service object

    function getCityPlace(city_id, id){
      return $http.get('/cities/' + city_id + '/places/' + id)
                  .then(handleResponse)
                  .catch(handleError);
    }

    // sends a post request containing city_id if applicable
    function createPlace(newPlace){
      var request = {
        method: "POST",
        url: "/places",
        data: {
          place: newPlace
        },
        headers: {
          "Content-Type": "application/json"
        }
      };

      return $http(request)
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
