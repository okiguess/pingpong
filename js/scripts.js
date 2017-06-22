//back-end
var conditional = function (number) {
  for (var currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    
  }
}


//front-end
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var userInput = parseInt($("input#userNumber").val());
    conditional(userInput);
    event.preventDefault();
  });
});
