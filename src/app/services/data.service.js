(function () {
    'use strict';
    angular
        .module('ui-app')
        .factory('DataService', DataService);
    DataService.$inject = ['$http'];
    function DataService($http) {// Factory for data manage
        var data = {}, promise;
        if (localStorage.getItem('data')) {// Downloading data from LocalStorage
            data.items = JSON.parse(localStorage.getItem("data")).items;
        } else {// Downloading default data from server
            promise = $http.get('data/items.json').then(function (response) {
                data.items = response.data;
            });
        }
        return {
            promise: promise,
            saveToLocalStorage: function (key, obj) {// Save data to the LocalStorage
                localStorage.setItem(key, JSON.stringify(obj))
            },
            getAllItems: function () {// Return all items
                return data.items;
            },
            createItem: function (newItem) {// Add new item to the Items section
                for (var i = 0; i < data.items.length; i++) {
                    if (data.items[i].itemName == newItem.itemName) {
                        return;
                    }
                }
                newItem.comments = [];
                data.items.push(newItem);
                this.saveToLocalStorage('data', data);
            },
            deleteItem: function (item) {// Delete item from the Items section
                var index = data.items.indexOf(item);
                data.items.splice(index, 1);
                this.saveToLocalStorage('data', data);
            },
            createItemComment: function (selectedItem, newComment) {// Add new comment to the Comments section
                selectedItem.comments.push(newComment);
                this.saveToLocalStorage('data', data);
            }
        };
    }
})();


