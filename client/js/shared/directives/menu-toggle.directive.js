(function() {
    'use strict';

    angular
        .module('bb.shared')
        .directive('menuToggle', Directive);

    /* @ngInject */
    function Directive() {
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;
        
        function link(scope, element, attrs) {
           
           var menu = document.getElementById('mobile-menu');
           var $menu = angular.element(menu);

           element.on('click', function (event) {
               if ($menu.hasClass('open')) {
                   $menu.removeClass('open').addClass('closed');
               }
               else {
                   $menu.removeClass('closed').addClass('open');
               }
           })
        }
    }
})();