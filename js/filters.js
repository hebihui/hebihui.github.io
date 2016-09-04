angular.module('customFilters.markdown', []).filter('markdown', function() {
	var converter = new showdown.Converter();
	return function(input) {
		return converter.makeHtml(input || '');
	}
});

angular.module('customFilters.trust', []).filter('trust', function($sce) {
	return function(input) {
		return $sce.trustAsHtml(input || '');
	}
});
