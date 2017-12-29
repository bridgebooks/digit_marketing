(function() {
    'use strict';

    angular.module('bb', [
        'bb.shared',
        'bb.home'
    ]);
})();
(function() {
    'use strict';

    angular.module('bb.shared', []);
})();
(function() {
    'use strict';

    angular.module('bb.home', []);
})();
(function() {
    'use strict';

    angular
        .module('bb.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$scope'];
    function HomeController($rootScope, $scope) {
        var vm = this;
        var swiper = null;

        var initSlider = function () {
            swiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                autoplay: 12000,
                slidesPerView: 4,
                breakpoints: {
                    480: {
                      slidesPerView: 1,
                    },
                    769: {
                        slidesPerView: 2
                    }
                } 
            });
        }

        setTimeout(function() {
            initSlider();
        }, 1500);
    }
})();
(function() {
    'use strict';

    angular
        .module('bb.shared')
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
(function() {
    'use strict';

    angular
        .module('bb.shared')
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