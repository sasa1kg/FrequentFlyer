springApp.controller('profileCtrl',
		function($rootScope, $scope, $http, $location, $window, $cookies, $routeParams) {

	
	
	$scope.user_id = $routeParams.id;
	
	$http.get("/account/" + $scope.user_id).then(function (data) {
		$scope.user = data.data;
	}, function (data) {
		if (data.status == "403") {
			alert("Not logged in");
			$location.path("/");
		}
		alert(angular.toJson(data));
	});

	$scope.getAccount = function () {
		$http.get("/account/" + $scope.user_id).then(function (data) {
			alert(angular.toJson(data));
			$scope.user = data.data;
		}, function (data) {
			if (data.status == "403") {
				alert("Not logged in");
				$location.path("/");
			}
			alert(angular.toJson(data));
		});
	}

	$scope.getCookies = function () {
		var favoriteCookie = $cookies.JSESSIONID;
		console.log(favoriteCookie);
		var cookies = $cookies.getAll();
		console.log(angular.toJson(cookies));
	}

	$scope.getCookies();


	$scope.logout = function () {
		$http.post("/invalidate", {}).then(function (data) {
			if (data.status == "200") {
				$location.path("/");
			}
		}, function (data) {
			alert(angular.toJson(data));
		});
	}
});