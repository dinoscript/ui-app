(function () {
    'use strict';
    angular
        .module('ui-app', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/main', {
                    templateUrl: 'views/main.view.html'
                })
                .when('/main/last-items', {
                    templateUrl: 'views/last-items.view.html'
                })
                .when('/main/best-comments', {
                    templateUrl: 'views/best-comments.view.html'
                })
                .when('/main/overview', {
                    templateUrl: 'views/overview.view.html',
                    controller: 'OverviewCtrl',
                    controllerAs: 'overviewCtrl',
                    resolve: {
                        getData: getData
                    }
                })
                .otherwise({
                    redirectTo: '/main/overview'
                });
        }]);
    getData.$inject = ['DataService'];
    function getData(DataService) {
        return DataService.promise;
    }
})();
