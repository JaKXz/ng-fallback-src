(function () {
  'use strict';

  /**
   * Creates a fallback for an src when it fails
   */
  function ngFallbackSrcDirective () {
    return {
      restrict: 'A',
      scope: false,
      link: function fallbackSrcLink (scope, iElement, iAttrs) {
        iElement.bind('error', attachFallbackImg);

        scope.$on('$destroy', function rmFallbackSrcBinding () {
          iElement.unbind('error', attachFallbackImg);
        });

        function attachFallbackImg () {
          angular.element(iElement).attr('src', iAttrs.fallbackSrc);
        }
      }
    };
  }

  angular.module('ngfallbackSrc', [])
    .directive('fallbackSrc', ngFallbackSrcDirective);
}());
