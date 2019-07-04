/* ---------- Variables ---------- */
var animals = ['horse', 'dog', 'cat', 'wolf', 'giraffe', 'whale', 'tiger', 'elephant', 'rabbit', 'monkey'];
queryTerm = "";

/* ---------- Functions ---------- */
//Creates buttons for each animal in the array
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

//Displays the animal GIFs with their associated rating
function displayAnimals() {
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=p6ZQy2Z694sls6dGCsQcONAUIiXv8IKA&rating=pg13&limit=10&q=" + animal;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        for (var i = 0; i < 10; i++) {
            var gifUrl = response.data[i].images.fixed_width_still.url;
            var rated = response.data[i].rating;
            var animalGif = $("<img>");
            var rateDiv = $("<div>");
            $(rateDiv).html("Rating: " + rated + "<br><br>");
            $(rateDiv).addClass('rate-styling')
            animalGif.attr("src", gifUrl);
            animalGif.attr("data-still", response.data[i].images.fixed_width_still.url);
            animalGif.attr("data-animate", response.data[i].images.fixed_width.url);
            animalGif.attr("data-state", "still");
            animalGif.attr("alt", "animal image");
            animalGif.attr("class", "gif");
            $('#gif-section').prepend(rateDiv);
            $('#gif-section').prepend(animalGif);
        };
    });
};

//Plays and pauses GIFs on click
function gifState () {
    var state = $(this).attr('data-state');
    console.log(state);
  
    if (state === 'still') {
      $(this).attr('src', $(this).attr('data-animate'));
      $(this).attr('data-state', 'animated');
    } else {
      $(this).attr('src', $(this).attr('data-still'));
      $(this).attr('data-state', 'still')
    };
};

/* ---------- Process ---------- */
$(document).ready(function() {

    //Runs creates button function
    createBtns();
   
    //Adds new animal to array and creates button for new animal
    $('#add-animal').on('click', function() {
        event.preventDefault();
            queryTerm = $('#animal-input').val().trim();
            var string = queryTerm.toLowerCase();
            //Ensures duplicate animal button cannot be created
            var i = animals.indexOf(string);
                if (i > -1) {
                    alert('Sorry, this animal button already exists!');
            } else {
                animals.push(string);
                createBtns();
                $('html, body').animate({
                    scrollTop: $("#animal-buttons").offset().top
                }, 500);
            };
    });

    //Clears search box on click of search field
    $('#animal-input').on('click', function() {
        $('#animal-input').attr('onfocus', "this.value=''")
    });

    //On click plays and pauses GIFs
    $(document).on("click", ".gif", gifState);

    //On click pulls associated animal gifs from API
    $(document).on("click", ".animalBtn", displayAnimals);



});