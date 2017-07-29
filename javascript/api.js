
// array of motorcycle buttons
var gifs = ["ktm", "yamaha", "triumph"];

// turn these into buttons



$('button').on('click', function() {

	var motorcycle = $(this).attr("submit");

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + motorcycle + "&api_key=8408276bba4042e3b6946f9ee6662501&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(response) {
		console.log(queryURL);
		console.log(response);

		var resultsf = response.data;

		for (var i = 0; i < results.length; i++) {

			var motorcycleDiv = $('<div>');

			var p = $('<p>').text("Rating: " + results[i].rating);

			var motorcycleImage = $('<img>');

			motorcycleImage.attr("src", results[i].images.fixed_height.url);

			motorcycleDiv.append(p);
			motorcycleDiv.append(motorcycleImage);

			$('#motorcycles').prepend(motorcycleDiv);

		};
	});

});

