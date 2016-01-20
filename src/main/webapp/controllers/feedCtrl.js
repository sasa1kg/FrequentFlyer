springApp.controller('feedCtrl',
		function($rootScope, $scope, $http, $location) {

	$scope.loadingFeedObj = "";
	$scope.loadedFeedObj = {
		"name" : "",
		"img_url" : ""
	};
	
	$http.post("/feed" , {})
		.then(function (data) {
			$scope.feeds = data.data;
		}, function (data) {
			
		});
	
	/*$http.post("/feed_options" , {})
	.then(function (data) {
		$scope.feedOptions = data.data;
		$scope.totalItems = $scope.feedOptions.length;
	}, function (data) {
		
	});*/
	
	$scope.getSelectedDrop = function () {
		if ($scope.typeDrop == 'all') {
			return 'none';
		} else if ($scope.typeDrop == 'News') {
			return '#cce5ff';
		} else if ($scope.typeDrop == 'Avio') {
			return 'none';
		} else if ($scope.typeDrop == 'Sport') {
			return '#ffcccc';
		} else if ($scope.typeDrop == 'Tech') {
			return '#ffffe5';
		}
		return 'none';
	}
	
	$scope.typeDrop = "all";
	
	$scope.typeChange = function () {
		console.log("typeChange ");
		$http.post("/complex_feed_options" , {
			"type" : $scope.typeDrop,
			"searchCrit" : "",
			"limit" : -1,
			"offset" : -1
		})
		.then(function (data) {
			$scope.feedOptions = data.data;
			$scope.totalItems = $scope.feedOptions.length;
		}, function (data) {
			
		});
	}
	
	$scope.typeChange();
	
	$scope.searchCrit = "";
	
	$scope.searchProc = function () {
		$http.post("/complex_feed_options" , {
			"type" : $scope.typeDrop,
			"searchCrit" : $scope.searchCrit,
			"limit" : -1,
			"offset" : -1
		})
		.then(function (data) {
			$scope.feedOptions = data.data;
			$scope.totalItems = $scope.feedOptions.length;
		}, function (data) {
			
		});
	}
	
	$scope.keypressSearch = function () {
		
	}
	
	$scope.getTypeColor = function (cat) {
		console.log("getTypeColor " + cat);
		if (cat == "News") {
			console.log("Ret news");
			return "'#cce5ff'";
		}
		if (cat == "Avio") return "'none'";
		if (cat == "Sports") return "'#ffcccc'";
		if (cat == "Tech") return "'#ffffe5'";
		if (cat == "Lifestyle") return "'#f2ccff'";
		return "'none'";
	};
	
	$scope.fetchFeed = function (feed_name, feed_url, feed_img) {
		$scope.loadingFeedObj = feed_name;
		$scope.loadingFeed = true;
		$http.post("/fetch_rss" , {
			"feedType" : 0,
			"feedName" : feed_name,
			"feedUrl" : feed_url
		}).then(function (data) {
			$scope.feeds = data.data;
			$scope.feed_totalItems = data.data.messages.length;
			$scope.loadingFeed = false;
			$scope.loadedFeedObj.name = feed_name;
			$scope.loadedFeedObj.url_img = feed_img;
		}, function (data) {
			$scope.loadingFeed = false;
		});
	};""
	/*-------- PAGINATION ----------------------------*/
	  $scope.viewby = 12;
	  $scope.currentPage = 4;
	  $scope.itemsPerPage = $scope.viewby;
	  $scope.maxSize = 5; //Number of pager buttons to show

	  $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	  $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.currentPage);
	  };

	$scope.setItemsPerPage = function(num) {
	  $scope.itemsPerPage = num;
	  $scope.currentPage = 1; //reset to first paghe
	}
	/*---------- PAGINATION FEEDS ----------------------*/
	 $scope.feed_viewby = 12;
	  $scope.feed_currentPage = 4;
	  $scope.feed_itemsPerPage = $scope.feed_viewby;
	  $scope.feed_maxSize = 5; //Number of pager buttons to show

	  $scope.feed_setPage = function (pageNo) {
	    $scope.feed_currentPage = pageNo;
	  };

	  $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.feed_currentPage);
	  };

	$scope.feed_setItemsPerPage = function(num) {
	  $scope.feed_itemsPerPage = num;
	  $scope.feed_currentPage = 1; //reset to first paghe
	}
});