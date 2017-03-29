(function(){

  'use strict';

  // the trick was to create a confirmed-click attributes instead of using ng-clicks (that clicks even if "cancel")
  function confirmClick(){
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var message = attrs.confirmClick || "Are you sure?";
        element.bind('click',function (event) {
          if ( message && confirm(message) ) {
              scope.$apply(attrs.confirmedClick);
          }
        });
      }
    };
  };

  angular
      .module('triplyst')
      .directive('confirmClick', confirmClick);

}());
