(function() {
    'use strict';

    angular
        .module('digit.shared')
        .directive('stickyHeader', Directive);

    /* @ngInject */
    function Directive($rootScope, $window) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link (scope, element, attrs) {
            var mobileScrollThreshold = 65;
            var desktopScrollThreshold = 60;
            var scroll = 0;

            if (element.hasClass('site__header')) scroll = desktopScrollThreshold;
            else if (element.hasClass('mobile__header')) scroll = mobileScrollThreshold;

            window.addEventListener('scroll', function (event) {
                if(window.scrollY > scroll) {
                    element
                        .removeClass('non-sticky')
                        .addClass('sticky');
                        
                    $rootScope.$emit('$headerModeChanged', { mode: 'sticky' })
                } else {
                    element
                        .removeClass('sticky')
                        .addClass('non-sticky');
                    $rootScope.$emit('$headerModeChanged', { mode: 'non-sticky' })
                }
            });
        }
    }
})();