var newLetter = prompt('Enter a Letter');

var i;

var j;

for (i = 0; i < 10; i++) {

  for (j = 0; j < i; j++) {
    document.write(newLetter);
  }
  document.write('<br>');
}
