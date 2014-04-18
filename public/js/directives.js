'use strict';

angular.module('appDirectives', [])
	.directive('keypressEvents', ['$document', '$rootScope',
		function($document, $rootScope) {
			return {
				restrict: 'A',
				link: function($scope) {
					$document.bind('keypress', function(e) {
						console.log($scope)
						console.log('Got keypress:', e.which);
						$rootScope.$broadcast('keypress', e);
						$rootScope.$broadcast('keypress:' + e.which, e);
					});
				}
			};
		}
	]);
