// event handler
$(document).ready(function () {
    $(".animal").click(function () {
        // console.log("You clicked me!");
        // console.log(this);
        let animal = $(this).data('name');
        // console.log(animal);

        $.ajax({
            url: "http://api.giphy.com/v1/gifs/search?api_key=X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0&q=" + animal,
            method: "GET",
            // dataType: "jsonp"
            // for loop through array
        }).then(function (response) {
            var results = response.data;
            // process array
            for (var i = 0; i < results.length; i++) {
                var still = results[i].images.fixed_height.url;
                // console.log(results[i]);
                // console.log("We have data");
                var animalImage = $("<img>");
                animalImage.attr("src", still);

                // target gifs div to append
                $("#gifs").append(animalImage);

                // attempt to clear previous image/s displayed
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
        $("button").on("click", function () {
            var newAnimal = $("#gif-input").val();
            // append a new button of course!
            var newButton = $("<button/>").addClass("btn btn-info animal").attr('data-name', newAnimal).html(newAnimal).css({ 'margin': '5px' });

            $(".submitbuttons").append(newButton);
                console.log("Work");
                console.log(newAnimal);
        })
        // of course it did because it was in the wrong position
        // fixed append so that only one tpye of image shows
        $("#gifs").empty();

    });
});

// X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0    api-key
// api.giphy.com      endpoint
// next
// parse json 
// 
// then append to page
