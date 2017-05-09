function checkIt() {
  // Initialize scores
  var police = 0;
  var doctor = 0;
  var teacher = 0;
  var writer = 0;
  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'police') {
        police++;
      }
      else if (e.value == 'doctor') {
        doctor++;
      }
      else if (e.value == 'teacher') {
        teacher++;
      }
      else if (e.value == 'writer') {
        writer++;
      }
    }

  }

  // Determine result
  var counts = "Police: " + police + ", " +
               "Doctor: " + doctor  + ", " +
               "Teacher: " + teacher + ", " +
               "Writer: " + writer;

  // What is the highest value?
  var max = Math.max(police, doctor, teacher, writer);

  // Form a message
  var message;

  if (max == police) {
    message = "You will be a Police Officer - better start catching up on all CSI shows";
  }
  else if (max == doctor) {
    message = "You will be a Doctor - the future is a beautiful time to save lives";
  }
  else if (max == teacher) {
    message = "You will be a Teacher - go and teach the youth of America";
  }
  else if (max == writer) {
    message = "You will be a Writer - go write the next great American novel";
  }

  // Display result
  document.getElementById('result').innerHTML = counts;
  document.getElementById('message').innerHTML = message;

  // document.getElementById('result').innerHTML = message;
}
