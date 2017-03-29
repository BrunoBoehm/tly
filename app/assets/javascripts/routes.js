(function() {
  'use strict';

  function config($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/index.html',
        controller: 'HomeController as vm'
      })
      .state('cities', {
        url: '/cities',
        templateUrl: 'cities/index.html',
        controller: 'CitiesController as vm'
      })
      .state('city', {
        url: '/cities/:id',
        templateUrl: 'cities/show.html',
        controller: 'CityController as vm'
      })
      .state('city.place', {
        url: '/places/:place_id',
        templateUrl: 'places/show.html',
        controller: 'PlacesController as vm'
      })
      .state('city.edit', {
        url: '/edit',
        templateUrl: 'cities/edit.html',
        controller: 'CityController as vm'
      })
      .state('city.newPlace', {
        url: '/new-place',
        templateUrl: 'places/new.html',
        controller: 'CityController as vm'
      })
      .state('places', {
        url: '/places',
        templateUrl: 'places/index.html',
        controller: 'PlacesController as vm'
      })

      // utiliser resolve sans localhost en début d'url ?
      // faire une nested view pour /cities/1/places
      // trouver un moyen avec through de faire une nested view /cities/1/tracks au travers de places ? City Model class method ?

    $urlRouterProvider.otherwise('/')
  }

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular
    .module('triplyst')
    .config(config);

}());
