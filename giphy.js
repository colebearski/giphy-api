// Motorcycle array
var motorcycles = ["Red Bull KTM", "Yamaha", "Triumph", "Ducati"];

// Creates buttons with the Motorcyle input
function renderButtons() {
    // Deleting motorcyles prior. Preventing duplicate buttons.
    $("#motorcycles").empty();

    for (var i = 0; i < motorcycles.length; i++) {
        // dynamically generate a button for each item in array
        var alpha = $("<button>");
        // adding class
        alpha.addClass("btn btn-primary moto");
        // adding data attributes
        alpha.attr("data-name", motorcycles[i]);
        // Provides the button with text
        alpha.text(motorcycles[i]);
        // Adds the button to the HTML
        $("#motorcycles").append(alpha);
    };

    // get those gifs
$(".moto").on("click", function() {
    console.log(this);
    var moto = $(this).attr("data-name");
    var queryURL = "https:api.giphy.com/v1/gifs/search?q=" + moto + "&api_key=8408276bba4042e3b6946f9ee6662501&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .done(function(response) {

        console.log(queryURL);
        console.log(response);

        var results = response.data;
        for (var i = 0; i < results.length; i++) {

            var motoDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var motoImage = $("<img>");
            motoImage.attr("src", results[i].images.fixed_height.url);
            motoDiv.append(p);
            motoDiv.append(motoImage);
            $("#gifs").prepend(motoDiv);

        };
    })
})
}

// Handles events to add new bikes to the array
$("#newBike").on("click", function() {
    // prevents the form from trying to submit itself
    event.preventDefault();

    var addMotorcycle = $("#addMotorcycle").val().trim();

    motorcycles.push(addMotorcycle);

    renderButtons();

})

renderButtons();

// getting the gifs to pause and resume on click

$(document).on('mouseover', function() {
    $(this).attr('src', $(this).data('animated'));
});

$(document).on('mouseleave', function() {
    $(this).attr('src', $(this).data('paused'));
});

// Stills needs some work, will probably want to include some global variables and specify data types throughout