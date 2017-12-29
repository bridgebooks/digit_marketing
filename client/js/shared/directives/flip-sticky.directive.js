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