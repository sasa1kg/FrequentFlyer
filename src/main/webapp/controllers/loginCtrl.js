springApp.controller('loginCtrl',
		function($rootScope, $scope, $http, $location) {

	$scope.username = "";
	$scope.password = "";
	
	$scope.login = function (username, password) {
		$http.post("/login" , "username=" + $scope.username + "&password=" + $scope.password, {
			headers: {"Content-Type" : "application/x-www-form-urlencoded"}
		}).then(function (data) {
			$rootScope.username =  $scope.username;
			$location.path('/profile/' + $scope.username);
		}, function (data) {
			alert("Error " + angular.toJson(data));
		});
	}
});