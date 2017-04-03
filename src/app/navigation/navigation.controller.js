(function () {
    'use strict';
    angular
        .module('ui-app')
        .controller('NavCtrl', NavCtrl);
    function NavCtrl() {// Navigation section controller
        var nav = this;
        nav.navItems = [{// Array of navbar elements
            navItemName: 'Main',
            navItemHref: '#!main',
            navSubItems: [{navSubItemName: 'Overview', navSubItemHref: '#!main/overview'},
                {navSubItemName: 'Last items', navSubItemHref: '#!main/last-items'},
                {navSubItemName: 'Best comments', navSubItemHref: '#!main/best-comments'}]
        }];
        nav.activeNavItem = nav.navItems[0].navSubItems[0];// Selecting the default menu item
        nav.setActive = function (navItem) {// Set the selected default menu item
            nav.activeNavItem = navItem
        }
    }
})();

