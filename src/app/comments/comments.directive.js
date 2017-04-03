(function () {
    'use strict';
    angular
        .module('ui-app')
        .directive('comments', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/comments.directive.html'
            }
        })
})();