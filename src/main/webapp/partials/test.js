function DisplayErrors(errors) {
	var resultsHTML = "";
	for (var i = 0; i < errors.length; ++i) {
		for (var errorDetail in errors[i]) {
			resultsHTML+= errorDetail + ": " + errors[i][errorDetail] + "<br />";
		}
	}

	$("#FlightStatusResult").html(resultsHTML);
}

function SearchFlightStatus() {
	jQuery.getJSON("http://api.bing.net/json.aspx?jsoncallback=?",
			{
		AppId: "Your App ID",
		Query: $("#searchText").val(),
		Sources: "InstantAnswer",
		Version: "2.2",
		Market: "en-us",
		JsonType: "callback"
			},
			function (data) {
				var errors = data.SearchResponse.Errors;
				if (errors != null) {
					DisplayErrors(errors);
				}
				else {
					DisplayResults(data);
				}
			});
}

$(document).ready(function() {
	$("#searchText").keypress(function (e) {
		if (e.which == 13 && $("#searchText").val() != '') {
			SearchFlightStatus();
		}
	});
});

function DisplayResults(data) {
	 
    var resultsHTML = "";

    $.each(data.SearchResponse.InstantAnswer.Results, function (i, item) {
        resultsHTML += "<a href='" + item.Url + "'>" + item.Title + "</a><br>";
        resultsHTML += "Flight: " + item.InstantAnswerSpecificData.FlightStatus.FlightName + "</br>";
        resultsHTML += "Status: " + item.InstantAnswerSpecificData.FlightStatus.StatusString + "</br>";
        resultsHTML += "From: " + item.InstantAnswerSpecificData.FlightStatus.OriginAirport.Name + "</br>";
        resultsHTML += "To: " + item.InstantAnswerSpecificData.FlightStatus.DestinationAirport.Name + "</br>";
        resultsHTML += "Scheduled Departure: " + item.InstantAnswerSpecificData.FlightStatus.ScheduledDeparture + "</br>";
        resultsHTML += "SchedulArrival: " + item.InstantAnswerSpecificData.FlightStatus.ScheduledArrival + "</br>";
    });

    $("#FlightStatusResult").html(resultsHTML);
}
