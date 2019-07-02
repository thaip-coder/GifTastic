/* ---------- Variables ---------- */
var animals = ['horse', 'dog', 'cat', 'wolf', 'giraffe', 'whale', 'tiger', 'elephant', 'rabbit', 'monkey'];
var queryTerm = "";

/* ---------- Functions ---------- */
function displayAnimals() {

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=p6ZQy2Z694sls6dGCsQcONAUIiXv8IKA&q=" + animals;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {});
};

/* ---------- Process ---------- */
$('#add-animal').on('click', function() {
    queryTerm = $('#animal-input').val().trim();
})