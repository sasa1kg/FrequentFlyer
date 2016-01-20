springApp.controller('navCtrl',
		function($rootScope, $scope, $http, $location) {
	

	$scope.setActiveTab = function () {
		var currentLoc = $location.url();
		console.log($location.url());
		if (currentLoc.indexOf("profile") > -1) {
			console.log("Profile page");
			$scope.currentState = "prof";
		} else if (currentLoc.indexOf("feed") > -1) {
			console.log("Feed page");
			$scope.currentState = "feed";
		} else if (currentLoc.indexOf("flightTracking") > -1) {
			$scope.currentState = "flight_tracking";
		}
	};
	
	$scope.setActiveTab();
	
	
	$scope.isTabActive = function (page) {
		if ($scope.currentState == page) {
			return true;
		} else {
			return false;
		}
	}
	
	$scope.redirectToProfPage = function () {
		$http.post("/user" , {})
		.then(function (data) {
			$location.path("/profile/" + data.data.principal.username);
		}, function (data) {
			
		});
	}
	
});