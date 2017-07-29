

$("button").on("click", function(event) {
	var motorcycle = $('this').attr('data-motorcycle');
	var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + motorcycle + "&api_key=8408276bba4042e3b6946f9ee6662501&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		var results = response.data;
		for (var i = 0; i < results.length; i++) {
			var gifDiv = $("<div class='item'>");
			var rating = results[i].rating;
			var p = $("<p>").text("Rating: " + rating);
			var motorcycleImage = $("<img>");
			motorcycleImage.attr("src", results[i].images.fixed_height.url);
			gifDiv.empty().append(p);
			gifDiv.empty().append(motorcycleImage);
			$("#motorcyles").empty().append(gifDiv);
		};
	})
})





$("button").on("click", function() {
	var motorcycle = $(this).attr("data-motorcycle");
	var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + motorcycle + "&api_key=8408276bba4042e3b6946f9ee6662501&limit=10";
	//var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      //  motorcycle + "&api_key=8408276bba4042e3b6946f9ee6662501&limit=10";
    
        console.log(queryURL);

        $.ajax({
        	url: queryURL,
        	method: "GET"
        })
        .done(function(response) {
        	var results = response.data;
        	for (var i = 0; i < results.length; i++) {
        		var gifDiv = $("<div class='item'>");
        		var rating = results[i].rating;
        		var p = $("<p>").text("Rating: " + rating);
        		var motorcycleImage = $("<img>");
        		motorcycleImage.attr("src", results[i].images.fixed_height.url);
        		gifDiv.prepend(p);
        		gifDiv.prepend(motorcycleImage);
        		$("#motorcycles").prepend(gifDiv);
        	};
        })
})