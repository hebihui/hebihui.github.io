var app = angular.module("Dawn", ['ui.router', 'customFilters.markdown', 'customFilters.trust','oauth']);
app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise("/");
    // Now set up the states
    $stateProvider.state('/access_token=:accessToken',{
        template: '',
        controller: function($location, AccessToken){
            var hash = $location.path().substr(1);
            AccessToken.setTokenFromString(hash);
            $location.path('/');
            $location.replace();
        }
    }).state('signin', {
        url: '/',
        templateUrl: 'login.html',
        controller: "SigninController"
    }).state('manage', {
        templateUrl: 'manage.html'
    }).state('manage.about', {
        url: '/about',
        templateUrl: 'templates/about.html'
    }).state('manage.me', {
        url: '/me',
        templateUrl: 'me.html'
    }).state('manage.dream', {
        url: '/dream',
        templateUrl: 'templates/dream.html'
    }).state("manage.show", {
        url: "/:name",
        templateUrl: "templates/show.html",
        controller: "ShowController"
    });
}]);
// app.config(function ($routeProvider) {
//   $routeProvider
//     .when('/access_token=:accessToken', {
//       template: '',
//       controller: function ($location, AccessToken) {
//         var hash = $location.path().substr(1);
//         AccessToken.setTokenFromString(hash);
//         $location.path('/');
//         $location.replace();
//       }
// });
// app.constant('SERVICE', {"API": "/api/v1"});