/* ---------- Variables ---------- */
var animals = ['horse', 'dog', 'cat', 'wolf', 'giraffe', 'whale', 'tiger', 'elephant', 'rabbit', 'monkey'];
var animal = "";

/* ---------- Functions ---------- */
function createBtns() {
    for (var i = 0; i < animals.length; i++) {
        document.getElementById("animal-buttons").innerHTML += "<button class='animalStyle'>" + animals[i] + "</button>";
    };
};

function displayAnimals() {

    //var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=p6ZQy2Z694sls6dGCsQcONAUIiXv8IKA&tag=horse";

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

    $('#animal-buttons').on('click', function() {
        displayAnimals();
    });

    $('#add-animal').on('click', function() {
        queryTerm = $('#animal-input').val().trim();
    });



});