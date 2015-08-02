'use strict'

app.directive('myClock', ['$interval', 'dateFilter', function($interval, dateFilter){
	function link(scope, element, attrs){
		var format, timeoutId;
		function updateTime(){
			element.text(dateFilter(new Date(), format));
		}
		scope.$watch(attrs.myClock, function(value) {
        	format = value;
        	updateTime();
      	});
      	element.on('$destroy', function() {
        	$interval.cancel(timeoutId);
      	});
      	timeoutId = $interval(function() {
        	updateTime(); // update DOM
      	}, 1000);
	}
	return{
		link: link,
		// emplateUrl: 'templates/myClock.html'
	};
}]);