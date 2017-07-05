(function() {
    'use strict';

    angular.module('digit', [
        'digit.shared'
    ]);
})();
(function() {
    'use strict';

    angular.module('digit.shared', []);
})();
(function() {
    'use strict';

    angular
        .module('digit.shared')
        .directive('flipSticky', Directive);

    /* @ngInject */
    function Directive($rootScope) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
          $rootScope.$on('$headerModeChanged', function(event, data) {
            if(data.mode == "sticky") {
              element.attr('src', '/assets/img/logo-blue.png');
            }
            else {
              element.attr('src', '/assets/img/logo-white.png');
            }
          })
        }
    }    
})();
(function() {
    'use strict';

    angular
        .module('digit.shared')
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