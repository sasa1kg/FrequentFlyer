springApp.controller('flightTrackingCtrl',
		function($rootScope, $scope, $http, $location, $sce) {

	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src);
	}
	
	$scope.directionResponse = {};

	$scope.fetchAutoSuggestion = function () {
		$http.get("/flight_track_search/" + $scope.airport)
		.then(function (data) {
			$scope.autoSuggestion = data.data.airports;
			$scope.addAirports = data.data.airports_by_cities;
			if ($scope.addAirports != undefined && $scope.addAirports.length > 0) {
				for (var int = 0; int < $scope.addAirports.length; int++) {
					var add = true;
					for (var int2 = 0; int2 < $scope.autoSuggestion.length; int2++) {
						if ($scope.autoSuggestion[int2].code == $scope.addAirports[int].code) {
							var add = false;
						}
					}
					if (add) {
						$scope.autoSuggestion.push($scope.addAirports[int]); 
					}
				}
			}
			return data.data.airports;
		}, function (data) {

		});
	}

	$scope.$watch('airport', function(newValue, oldValue) {
		if (newValue instanceof Object) {
			$scope.getAirportTimetable();
			$scope.loadMap(newValue);
		}
	});

	$scope.getAirportTimetable = function () {
		$http.get("/flight_airport_data/" + $scope.airport.code).then(function (data) {
			$scope.timetable = data.data;
		}, function (data) {

		});
	}


	$scope.showPopover = function(plane_reg) {
		$scope.plane_reg = plane_reg;
		$scope.popoverIsVisible = true; 
	};

	$scope.hidePopover = function (plane_reg) {
		$scope.popoverIsVisible = false;
	};

	$scope.dynamicPopover = {
			reg: '',
			templateUrl: 'myPopoverTemplate.html',
			type: '',
			src: ''
	};
	
	$scope.dynamicPopoverTraffic = {
			line: {},
			templateUrl: 'myTrafficPopover.html',
			src: ''
	};

	$scope.hovered = function (reg, type) {
		$scope.popupLoading = true;
		$scope.dynamicPopover.reg = reg;
		$scope.dynamicPopover.type = type;
		$scope.dynamicPopover.src = "http://www.jetphotos.net/showphotos.php?aircraft=-2&airline=-2&country=-2&photog=-2&category=-2&year=-2&keywordrange=reg&keywordlimiter=1&keywords=" + reg + "&sort=1&genre=1&size=-2&mainsearch=search&displaymode=2&display=1";
	}

	$scope.hoveredTraffic = function (line) {
		$scope.dynamicPopover.line = line;
	}
	
	$scope.iframeLoadedCallBack = function(){
		$scope.popupLoading = false;
	}

	$scope.loadMap = function (airport) {
		var myLatlng = new google.maps.LatLng(airport.lat, airport.lng);
		var mapCanvasId = 'mapHolder',
		myOptions = {
				center: myLatlng,
				streetViewControl: false,
				mapTypeId: google.maps.MapTypeId.HYBRID,
				zoom: 10,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.LEFT_CENTER
				}
		}
		$scope.map = new google.maps.Map(document.getElementById(mapCanvasId), myOptions);
		$scope.direction = 'from';
		$scope.setAirportPosition($scope.map, airport, false);
	}
	
	$scope.liveFlightURL = "https://planefinder.net/data/flight/OS796&amp";
	
	$scope.live = function (flightData) {
		alert(angular.toJson(flightData));
		$scope.liveFlightURL = "https://planefinder.net/data/flight/" + flightData.flight.airline_code + flightData.flight.number;
	}

	$scope.setAirportPosition = function (map, airport, inverted) {
		$scope.iconURL = ImageRes(airport.code);
		var title = airport.name;
		var coords = new google.maps.LatLng(airport.lat, airport.lng);
		var contentString = airport.name + " [" + airport.code + "]" + "</br>" + airport.city_name + "</br>" + airport.country_code;
		var infowindow = new google.maps.InfoWindow({content: contentString});

		var marker = new google.maps.Marker({
			position: coords,
			map: map,
			icon: "img/airportmap.png",
			title: title
		});
		google.maps.event.addListener(marker, 'click', 
				function (infowindow, marker) {
			return function () {
				infowindow.open(map, marker);
			};
		}(infowindow, marker)
		);
		$scope.directions(map, airport, inverted);
	}

	$scope.directionLoading = false;
	$scope.directionLoaded = false;
	
	
	$scope.dirChange = function (dir) {
		$scope.directions($scope.map, $scope.airport, dir);
	}
	
	
	/*-------------------------------------------------------*/
	$scope.directions = function (map, airport, inverted) {
		$scope.directionLoading = true;
		var city_geocode;
		var geocoder =  new google.maps.Geocoder();
		geocoder.geocode( { 'address': airport.city_name}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				city_geocode = {
						lng: results[0].geometry.location.lng(),
						lat: results[0].geometry.location.lat()
				}
				drawDirections(city_geocode, map, airport, inverted);
			} else {
				$scope.directionLoading = false;
				$scope.directionLoaded = false;
				alert("Something got wrong " + status);
			}
		});

		drawDirections = function (city_geocode, map, airport, inverted) {
			var directionsDisplay;
			var directionsService = new google.maps.DirectionsService();


			directionsDisplay = new google.maps.DirectionsRenderer();
			directionsDisplay.setMap(map);
			google.maps.event.addDomListener(document.getElementById('routebtn'), 'click', calcRoute(inverted));


			function calcRoute(inverted) {
				console.log("INVERTED " + inverted);
				if (inverted) {
					var start = new google.maps.LatLng(city_geocode.lat, city_geocode.lng);
					var end = new google.maps.LatLng(airport.lat, airport.lng);
				} else {
					var start = new google.maps.LatLng(airport.lat, airport.lng);
					var end = new google.maps.LatLng(city_geocode.lat, city_geocode.lng);
				}
				var request = {
						origin: start,
						destination: end,
						travelMode: google.maps.TravelMode.TRANSIT
				};
				directionsService.route(request, function(response, status) {
					$scope.directionResponse = response;
					if (status == google.maps.DirectionsStatus.OK) {
						console.log("Received DIRECTIONS");
						$scope.directionLoading = false;
						$scope.directionLoaded = true;
						directionsDisplay.setDirections(response);
						directionsDisplay.setMap(map);
						$scope.$apply();
					} else {
						$scope.directionLoading = false;
						$scope.directionLoaded = false;
						$scope.$apply();
						alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
					}
				});
			}
		}
	};

});