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
        .directive('stickyHeader', Directive);

    Directive.$inject = ['$window'];
    function Directive($window ) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: DirectiveController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function DirectiveController () {
        
    }
})();