$( "#root" ).ready( "https://code.jquery.com/jquery-3.4.1.min.js" );
// added root element dom and added .ready() load jqury last


//var dayNow = $('#currentDay')
//var timeNow = $('#currentTime');
//var minateNow = $('#currentMinute');
//var hourNow = $('#currentHour');

var time12 = ['hour-9','hour-10','hour-11','hour-12','hour-13','hour-14','hour-15','hour-16','hour-17'];
var time24 = ['13pm','14pm','15pm','16pm','17pm','18pm'];

var currentDate = dayjs().format('dddd[,] DD MMMM YYYY');
//ar currentHour = dayjs().format('hh:mm:ss A');
//var hour = dayjs().format('HH');


var textArea = document.getElementsByName('textarea');
document.getElementById("currentDay").innerHTML = currentDate;

var saveBtn = document.querySelector('.saveBtn');

saveBtn.addEventListener('click',function(){

var timeSlot = document

}
localStorage.setItem("textSave", JSON.stringify(textSave));

console.log("textSave", JSON.stringify(textSave));

});






  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

