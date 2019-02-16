// event handler
$(document).ready(function () {
    const animaldiv = $("#animalsbuttons");
    $(".animal").click(function () {

        let animal = $(this).data('data-name');

        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?api_key=X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0&q=" + animal,
            method: "GET",

            // for loop through array
        }).then(function (response) {
            var results = response.data;
            // process array
            for (var i = 0; i < results.length; i++) {
                var still = results[i].images.fixed_height.url;

                var animalImage = $("<img>");
                animalImage.attr("src", still);

                // target gifs div to append
                $("#gifs").append(animalImage);

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
        console.log("I am working1")
        // $("#gifs").empty();

    });

    $(document).on("click", "#submitButton", function () {
        event.preventDefault()
        console.log("I am working")

        var newAnimal = $("#gif-input").val().trim();

        console.log(newAnimal)
        var newButton = $("<button/>").addClass("btn btn-info animal").attr('data-name', newAnimal).html(newAnimal).css({ 'margin': '5px' });

        
        console.log("newButton", newButton)

        // append to page
        animaldiv.append(newButton);
        console.log(newAnimal);
        console.log(animaldiv);

        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?api_key=X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0&q=" + newAnimal,
            method: "GET",
            // dataType: "jsonp"
            // for loop through array
        }).then(function (response) {
            var results = response.data;
            // process array
            for (var i = 0; i < results.length; i++) {
                var still = results[i].images.fixed_height.url;
                var animalImage = $("<img>");
                animalImage.attr("src", still);
                // target gifs div to append
                $("#gifs").append(animalImage);

                // attempt to clear previous image/s displayed
                // it emptied on loading?

            }

        });
    });
});

// X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0    api-key
// api.giphy.com      endpoint
// next
// parse json 
// 
// then append to page
