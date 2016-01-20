springApp.controller('newAccountCtrl',
		function($rootScope, $scope, $http, $location, $window, $cookies, $routeParams) {



	$scope.username = "";
	$scope.password = "";
	$scope.password2 = "";
	$scope.first_name = "";
	$scope.last_name = "";
	$scope.email;



	$scope.register = function () {
		if ($scope.password != $scope.password2) {
			demo.showNotificationText('top','right', 'Passwords do not match');
			return;
		};
		$http.post("/invalidate", {}).then(function (data) {
			if (data.status == "200") {
				$http.post("/register", {
					"username" : $scope.username,
					"password" : $scope.password,
					"first_name" : $scope.first_name,
					"last_name" : $scope.last_name,
					"email" : $scope.email
				}).then(function (data) {
					$http.post("/login" , "username=" + $scope.username + "&password=" + $scope.password, {
						headers: {"Content-Type" : "application/x-www-form-urlencoded"}
					}).then(function (data) {
						$location.path('/profile/' + $scope.username);
					}, function (data) {
						alert("Error " + angular.toJson(data));
					});
				}, function (data) {
					console.log(angular.toJson(data));
				});
			}
		}, function (data) {
			alert(angular.toJson(data));
		});

	};

	$scope.demoAccount = function () {

	};
});