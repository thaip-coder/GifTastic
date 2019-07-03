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
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=p6ZQy2Z694sls6dGCsQcONAUIiXv8IKA&tag=" + animal;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var gif = response.data.image_original_url;
        var animalGif = $("<img>");
        animalGif.attr("src", gif);
        animalGif.attr("alt", "animal image");
        $('#gif-section').prepend(animalGif);
    });
};

/* ---------- Process ---------- */
$(document).ready(function() {

    createBtns();


    /* $('#add-animal').on('click', function() {
        queryTerm = $('#animal-input').val().trim();
    }); */

    $(document).on("click", ".animalBtn", displayAnimals);



});