function checkIt() {
  // Initialize scores
  var red = 0;
  var orange = 0;
  var yellow = 0;
  var green = 0;
  var blue = 0;
  var purple = 0;

  var title = "Answer These Questions and We Will Tell You Your Favorite Color";
  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'red') {
        red++;
      }
      else if (e.value == 'orange') {
        orange++;
      }
      else if (e.value == 'yellow') {
        yellow++;
      }
      else if (e.value == 'green') {
        green++;
      }
      else if (e.value == 'blue') {
        blue++;
      }
      else if (e.value == 'purple') {
        purple++;
      }
    }

  }

  // Determine result
  var counts = "Red: " + red + ", " +
               "Orange: " + orange  + ", " +
               "Yellow: " + yellow + ", " +
               "Green: " + green + ", " +
               "Blue: " + blue + ", " +
               "Purple: " + purple;

  // What is the highest value?
  var max = Math.max(red, orange, yellow, green, blue, purple );

  // Form a heading
  var heading;

  if (max == red) {
    heading = "You got: Red";
  }
  else if (max == orange) {
    heading = "You got: Orange";
  }
  else if (max == yellow) {
    heading = "You got: Yellow";
  }
  else if (max == green) {
    heading = "You got: Green";
  }
  else if (max == blue) {
    heading = "You got: Blue";
  }
  else if (max == purple) {
    heading = "You got: Purple";
  }
  // Form a message
  var message;

  if (max == red) {
    message = "Red";
  }
  else if (max == orange) {
    message = "Orange";
  }
  else if (max == yellow) {
    message = "Yellow";
  }
  else if (max == green) {
    message = "Green";
  }
  else if (max == blue) {
    message = "Blue";
  }
  else if (max == purple) {
    message = "Purple";
  }

  // Form a image
  var image;

  if (max == red) {
    image ="img/act.jpg";
  }
  else if (max == orange) {
    image = "img/act.jpg";
  }
  else if (max == yellow) {
    image = "img/act.jpg";
  }
  else if (max == green) {
    image = "img/act.jpg";
  }
  else if (max == blue) {
    image = "img/act.jpg";
  }
  else if (max == purple) {
    image = "img/act.jpg";
  }


  // Display result
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = heading;
  document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-img').src = image;

  //document.getElementById('result-text').innerHTML = message;

  // document.getElementById('result').innerHTML = message;
}
