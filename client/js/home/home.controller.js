(function() {
    'use strict';

    angular
        .module('bb.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', '$scope'];
    function HomeController($rootScope, $scope) {
        var vm = this;
        var swiper = null;

        vm.swipeLeft = function () {
            if (swiper) {
                swiper.slidePrev();
            }
        }

        vm.swipeRight = function () {
            if (swiper) {
                swiper.slideNext();
            }
        }

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