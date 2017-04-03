(function () {
    'use strict';
    angular
        .module('ui-app')
        .directive('items', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/items.directive.html'
            }
        })
})();