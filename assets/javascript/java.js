/* ---------- Variables ---------- */
var animals = ['horse', 'dog', 'cat', 'wolf', 'giraffe', 'whale', 'tiger', 'elephant', 'rabbit', 'monkey'];

/* ---------- Functions ---------- */
function displayAnimals() {
    var animal = $(this).attr("data-name");
    var queryURL = "https://www.giphy.com/?t=" + animal + "&apikey=p6ZQy2Z694sls6dGCsQcONAUIiXv8IKA";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var animalDiv = $("<div class='movie'>");
        var rating = response.Rated;
        var
    })
}

/* ---------- Process ---------- */
