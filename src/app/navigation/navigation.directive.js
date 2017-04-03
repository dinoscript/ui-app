(function () {
    'use strict';
    angular
        .module('ui-app')
        .directive('navigation', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/navigation.directive.html'
            }
        })
})();