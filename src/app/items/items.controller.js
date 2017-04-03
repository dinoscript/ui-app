(function () {
    'use strict';
    angular
        .module('ui-app')
        .controller('ItemsCtrl', ItemsCtrl);
    ItemsCtrl.$inject = ['DataService'];
    function ItemsCtrl(DataService) {// Items section controller
        var items = this;
        items.itemsArray = DataService.getAllItems();
        items.createItem = DataService.createItem;
        items.deleteItem = DataService.deleteItem;
        items.saveToLocalStorage = DataService.saveToLocalStorage;
    }
})();
