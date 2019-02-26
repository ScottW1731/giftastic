// event handler
$(document).ready(function() {

    // animals array
    var animals = [
        "dog",
        "cat",
        "rabbit",
        "hamster",
        "skunk",
        "goldfish",
        "bird",
        "ferret",
        "turtle",
        "sugar glider",
        "chinchilla",
        "hedgehog",
        "hermit crab",
        "gerbil",
        "pygmy goat",
        "chicken",
        "capybara",
        "teacup pig",
        "serval",
        "salamander",
        "frog"
    ];

  function CreateButtons(animalArray, newClass, addArea){
      $(addArea).empty();
      for(var i = 0; i < animalArray.length; i++) {
        var newButton = $("<button>");
        newButton.addClass(newClass);
        newButton.attr("data-name", animalArray[i]);
        newButton.text(animalArray[i]);
        $(addArea).append(newButton);
      }
  };
  CreateButtons(animals,"btn btn-info animal", "#animalsbuttons");

  const animaldiv = $("#animalsbuttons");
  $(".animal").click(function() {
    var gifs = $("#gifs");
    let animal = $(this).data("name");

    $.ajax({
      // remove https: to work on git hub, but it won't work locally without it?
      url:
        "https://api.giphy.com/v1/gifs/search?api_key=X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0&q=" +
        animal,
      method: "GET"

      // for loop through array
    }).then(function(response) {
      var results = response.data;
      // process array
      for (var i = 0; i < results.length; i++) {
        var still = results[i].images.fixed_height.url;
        var animate = results[i].images.fixed_height.url;

        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);

        var animalImage = $("<img>");
        animalImage.attr("src", still);
        animalImage.attr("src", animate);

        // target gifs div to append
        gifs.append(animalImage);
        gifs.append(p);
        // TODO: attempt to clear previous image/s displayed
        // it emptied on loading?
      }
      // type/images/fixedheight/url
      // format data
    });
    // dynamically create button
    // functions just like other buttons
    // target div id animalsbuttons
    // on click to build the button
    // populate to add it in with other animal buttons
    // console.log("I am working1");
    $("#gifs").empty();
  });

  $(document).on("click", "#submitButton", function() {
    event.preventDefault();
    console.log("I am working");
    let gifs = $("#gifs");

    var newAnimal = $("#gif-input")
      .val()
      .trim();

    console.log(newAnimal);
    var newButton = $("<button/>")
      .addClass("btn btn-info animal")
      .attr("data-name", newAnimal)
      .html(newAnimal)
      .css({ margin: "5px" });

    console.log("newButton", newButton);

    // append to page
    animaldiv.append(newButton);
    console.log(newAnimal);
    console.log(animaldiv);

    $.ajax({
      url:
        "https://api.giphy.com/v1/gifs/search?api_key=X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0&q=" +
        newAnimal,
      method: "GET"
      // dataType: "jsonp"
      // for loop through array
    }).then(function(response) {
      var results = response.data;
      console.log(response);
      // process array
      for (var i = 0; i < results.length; i++) {
        var results = response.data;
        var still = results[i].images.fixed_height_still.url;
        var animate = results[i].images.fixed_height.url;

        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);

        var animalImage = $("<img>");
        animalImage.attr("src", still);
        animalImage.attr("src", animate);

        // target gifs div to append
        gifs.append(animalImage);
        gifs.append(p);
        // attempt to clear previous image/s displayed
        // it emptied on loading?
      }
    });
    $("#gifs").empty();
  });

//   $(document).on("click", ".animal-image", function() {
//     var state = $(this).attr("data-state");

//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     }
//   });

  $("#gifs").on("click", function() {
    console.log("something");
  });


});
// need on click for images

// X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0    api-key
// api.giphy.com      endpoint
// next
// parse json
//
// then append to page
