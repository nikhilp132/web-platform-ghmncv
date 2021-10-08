console.log('hello!');

$(document).ready(function () {
  $('input').keydown(function () {
    var string = document.getElementById('searchString').value();

    console.log(string);
  });
});
