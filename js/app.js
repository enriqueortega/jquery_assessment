
var counter = 0;
$(document).ready(function(){

    //There should be text that provides a number,
  $('.container').append('<p class="counter">The Generate Row Button Has Been Clicked 0 Times</p>');
  //When page loads, have a button on the DOM that says 'generate'.
  $('.container').append('<button class="generate">Generate</button>');
  //When clicked, append a new container on the DOM
  $('.generate').on('click', appendContainer);

  // The default or 'normal' state of the background-color should be yellow

  //The delete button should delete JUST the container that the button is in
  $('.container').on('click', '.delete', deleteAppended);

  // The change button should change the background-color of the container to red
  $('.container').on('click', '.change', changeAppended);


});

function appendContainer(){

  $('.container').append('<div class="appended">WORDS</div>');

  var $el = $('.container').children().last();
  //That container should have two buttons

  // One that reads 'delete'
  $el.append('<button class="delete">Delete</button>');
  // The other that reads 'change'
  $el.append('<button class="change">Change</button>');




  //the number should be the number of times the 'generate row' button has been clicked
  counter++;
  $('.counter').text('The Generate Row Button Has Been Clicked ' + counter + ' Times');
}

function deleteAppended(){
  $(this).parent().remove();
}

function changeAppended(){
  // Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.
  $(this).parent().toggleClass('changed');
}
