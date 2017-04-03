(function () {
    'use strict';
    angular
        .module('ui-app')
        .controller('OverviewCtrl', OverviewCtrl);
    OverviewCtrl.$inject = ['DataService'];
    function OverviewCtrl(DataService) {// Overview section controller
        var overview = this;
        overview.items = DataService.getAllItems();
        overview.selectedItem = overview.items[0];// Set the selected default item
    }
})();
