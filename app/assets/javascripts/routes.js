(function() {
  'use strict';

  angular
    .module('triplyst')
    .config(function($stateProvider, $urlRouterProvider){
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

      $urlRouterProvider.otherwise('/')
    })

}());
