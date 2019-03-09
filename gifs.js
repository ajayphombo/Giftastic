
var topics=[];

$("#add-topics").on("click", function(event) {
    
        event.preventDefault();

        var topic = $("#userInput").val().trim();
        console.log(topic);
        topics.push(topic);
        console.log(topics);
        renderButtons();
        gifSearch();
        

  });
  renderButtons();

function renderButtons(){

    $("#buttons-view").empty();

        for(var i=0;i<topics.length;i++){
            var b=$("<button>");
            console.log(b);
            b.addClass("topicChosen");
            b.attr("data-name",topics[i]);
            b.text(topics[i]);
            $("#buttons-view").append(b);
         }
}

function gifSearch(){
                $("button").on("click", function() {
                    var topicGif = $(this).attr("data-name");
                    console.log(this);

                    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                    topicGif + "&api_key=fTQFhu3tMcEVU2sqaVkMweJGunYG68UR&limit=10";

                    $.ajax({
                    url: queryURL,
                    method: "GET"
                    })

                    .then(function(response) {
                        var results = response.data;
                        console.log(results);
                        for (var i = 0; i < results.length; i++) {
                            var gifDiv = $("<div>");
                            var rating = results[i].rating;
                            var p = $("<p>").text("Rating: " + rating);
                            var topicImage = $("<img>");
                            topicImage.attr("src", results[i].images.fixed_height_still.url);
                            topicImage.attr("data-still",results[i].images.fixed_height_still.url);
                            topicImage.attr("data-animate",results[i].images.fixed_height.url);
                            topicImage.attr("data-state","still");
                            topicImage.addClass("gif");
                            gifDiv.append(p);
                            gifDiv.append(topicImage);
                            $("#display").prepend(gifDiv);
                            changeMotion();

        }
      });
  });

};

function changeMotion(){

    $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });


};//these codes are mostly copied from the class activities. Just rearranged them to get the desired outcome.