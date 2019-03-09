
var topics=[];

function renderButtons(){

    $("#buttons-view").empty();

        for(var i=0;i<topics.length;i++){
            var b=$("<button>");
            b.addClass("topic");
            b.attr("data-name",topics[i]);
            b.text(topics[i]);
            $("#buttons-view").append(b);
         }
}

$("#add-topics").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var topic = $("#userInput").val().trim();
    console.log(topic);
    topics.push(topic);
    console.log(topics);
    // calling renderButtons which handles the processing of our movie array
    renderButtons();
  });
  renderButtons();
