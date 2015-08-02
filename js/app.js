var app = angular.module("Dawn", ['ui.router', 'customFilters.markdown','customFilters.trust']);

app.config(['$locationProvider','$stateProvider','$urlRouterProvider', function($locationProvider, $stateProvider , $urlRouterProvider){
	// For any unmatched url, redirect to /

	$locationProvider.html5Mode(false);

	$urlRouterProvider.otherwise("/");

	// Now set up the states
	$stateProvider
		.state('signin', {
			url: '/',
			templateUrl: 'login.html',
			controller: 'SigninCtrl'
		})
		.state('manage',{
			templateUrl: 'manage.html'
		})
		.state('manage.about',{
			url: '/about',
			templateUrl: 'templates/about.html'
		})
		.state("manage.show", {
			url: "/:name",
			templateUrl: "templates/show.html",
			controller: "ShowController"
		});
}]);

// app.constant('SERVICE', {"API": "/api/v1"});

