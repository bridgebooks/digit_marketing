(function() {
    'use strict';

    angular.module('digit', [
        'digit.shared',
        'digit.home'
    ]);
})();
(function() {
    'use strict';

    angular.module('digit.shared', []);
})();
(function() {
    'use strict';

    angular.module('digit.home', []);
})();
(function() {
    'use strict';

    angular
        .module('digit.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$scope'];
    function HomeController($rootScope, $scope) {
        var vm = this;
        var swiper = null;

        vm.slides = [
            {
                //imgUrl: 'https://static1.squarespace.com/static/55a3d162e4b0f223c4ebc083/t/58657932f5e23172079525ae/1483045194959/AdobeStock_119876776.jpeg?format=1500w',
                imgUrl: '/assets/img/slides/home/1.jpg',
                caption: 'Track expenses and income.',
                subtitle: 'Keep track of all your expenses and income with ease.'
            },
            {
                //imgUrl: 'https://static1.squarespace.com/static/56ff0d531d07c090232cef33/t/5705fdf345bf215d13e01a71/1460010490964/iStock_000062786386_Large.jpg?format=2500w',
                imgUrl: '/assets/img/slides/home/2.jpg',
                caption: 'Expand your business',
                subtitle: 'Use insights from reports and plan your next expansion'
            },
            {
                imgUrl: '/assets/img/slides/home/3.jpg',
                caption: 'Accurate financial documents.',
                subtitle: 'Get up to date financial documents to help with loans and grants'
            },
            {
                imgUrl: '/assets/img/slides/home/4.jpg',
                caption: 'Monitor daily sales transactions',
                subtitle: 'Never miss a sale again.'
            }
        ]

        var initSlider = function () {
            swiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay: 12000
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