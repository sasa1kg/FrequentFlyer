var springApp = angular.module("springApp", ['ngCookies','ngRoute',   
                                             'LocalStorageModule','ngAnimate', 'ui.bootstrap', 'ngSanitize']);


springApp.config(['$routeProvider', function(routeProvider) {


	routeProvider.when("/", {
		templateUrl: "partials/home.html",
		controller: "homeCtrl",
		resolve: {
		}
	})
	.when("/login", {
		templateUrl: "partials/login.html",
		controller: "loginCtrl",
		resolve: {
		}
	})
	.when("/profile/:id", {
		templateUrl: "partials/btheme/user.html",
		controller: "profileCtrl",
		resolve: {
		}
	})
	.when("/newAccount", {
		templateUrl: "partials/newAccount.html",
		controller: "newAccountCtrl",
		resolve: {
		}
	})
	.when("/feed", {
		templateUrl: "partials/btheme/table.html",
		controller: "feedCtrl",
		resolve: {
		}
	})
	.when("/flightTracking", {
		templateUrl: "partials/flightTracking.html",
		controller: "flightTrackingCtrl",
		resolve: {
		}
	})
	.otherwise({redirectTo: '/'});

}]);




