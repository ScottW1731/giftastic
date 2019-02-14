// event handler
$(document).ready(function(){
    $(".animal").click(function(){
        console.log("You clicked me!");
        console.log(this);
        let animal = $(this).data('name');
        console.log(animal);

        $.ajax({
            url: "api.giphy.com/v1/gifs/search?api_key=X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0&q=" + animal,
            dataType: "jsonp"
        }).done(function(data){
            console.log(data);
        });

        // $.ajax("api.giphy.com/v1/gifs/search?api_key=X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0&q=" + animal, function(data){
        //     console.log(data)
        // });
    });
});

// X97IrbPxwDVu8KnVEQ4ybE2JNhwOkwU0    api-key
// api.giphy.com      endpoint
// next
// parse json then append to page