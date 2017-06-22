//back-end
var conditional = function (userInput) {
  if (isNaN(userInput)) {
    alert("must enter a number!");
  } else if (userInput <= 0) {
    alert("Come on! Enter a number higher than 0!");
  }
  for (var currentNumber = 1; currentNumber <= userInput; currentNumber += 1) {
    if (currentNumber % 3 === 0) {
      $("#list").append("<li>ping</li>");
    } else if (currentNumber % 5 === 0) {
      $("#list").append("<li>pong</li>");
    } else if (currentNumber % 15 === 0) {
      $("#list").append("<li>ping pong</li>");
    } else if (currentNumber % 3 !== 0 || currentNumber % 5 !== 0 || currentNumber % 15 !== 0) {
      $("#list").append("<li>" + currentNumber + "</li>");
    }
  };
};


//front-end
$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    $("#list").empty();
    var userInput = parseInt($("input#userNumber").val());
    conditional(userInput);
    event.preventDefault();
  });
});
