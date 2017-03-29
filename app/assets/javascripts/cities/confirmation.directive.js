(function(){

  'use strict';

  function confirmClick(){
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        var msg = attr.confirmClick || "Are you sure?";
        var clickAction = attr.ngClick;
        element.bind('click',function (event) {
          if ( window.confirm(msg) ) {
              scope.$eval(clickAction)
          }
        });
      }
    };
  };

  angular
      .module('triplyst')
      .directive('confirmClick', confirmClick);

}());
