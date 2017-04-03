(function () {
    'use strict';
    angular
        .module('ui-app')
        .controller('CommentsCtrl', CommentsCtrl);
    CommentsCtrl.$inject = ['DataService'];
    function CommentsCtrl(DataService) {// Comments section controller
        var comments = this;
        comments.createItemComment = DataService.createItemComment;
        comments.saveToLocalStorage = DataService.saveToLocalStorage;
    }
})();
