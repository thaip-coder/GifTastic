/* ---------- Variables ---------- */
var animals = ['horse', 'dog', 'cat', 'wolf', 'giraffe', 'whale', 'tiger', 'elephant', 'rabbit', 'monkey'];

/* ---------- Functions ---------- */
function createBtns() {

    $("#animal-buttons").empty();

    for (var i = 0; i < animals.length; i++) {
      var a = $("<button>");
      a.addClass("animalBtn");
      a.attr("data-name", animals[i]);
      a.text(animals[i]);
      $("#animal-buttons").append(a);
    };
  };

function displayAnimals() {

    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=p6ZQy2Z694sls6dGCsQcONAUIiXv8IKA&limit=10&q=" + animal;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        for (var i = 0; i < 10; i++) {
            var gifUrl = response.data[i].images.fixed_width_still.url;
            var animalGif = $("<img>");
            animalGif.attr("src", gifUrl);
            animalGif.attr("data-still", gifUrl);
            animalGif.attr("data-animate", response.data[i].images.fixed_width.url);
            animalGif.attr("data-state", "still");
            animalGif.attr("alt", "animal image");
            animalGif.attr("class", "gif");
            $('#gif-section').prepend(animalGif);
        };
    });
};

/* ---------- Process ---------- */
$(document).ready(function() {

    createBtns();
   
    $('.gif').on('click', function() {
        if (animalGif === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
      } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        };
    });
    
    /* $('#add-animal').on('click', function() {
        queryTerm = $('#animal-input').val().trim();
    }); */

    $(document).on("click", ".animalBtn", displayAnimals);



});