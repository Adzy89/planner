var currentDay= dayjs().format('dddd, MMM DD YYYY');
$("#currentDay").html(currentDay);




$( document ).ready(function() {
  
 $(".saveBtn").on('click', function () {
   
 // Created an object to store the description input and current time
    var inputData = {};

    inputData.descriptionInput = $(this).siblings('.description').val();
    inputData.currentTime = $(this).parent().attr("id");

    localStorage.setItem(inputData.descriptionInput,inputData.currentTime);
 
   });

   
   var timeBlocks = $(".time-block");
   for (var i = 0; i < timeBlocks.length; i++) {
   var timeblock = parseInt(timeBlocks.eq(i).attr('id').split('-')[1]);
   var currentTime = dayjs();
   
      if (currentTime >= 6 && currentTime < 12) {
       // Morning color scheme
      timeBlocks.eq(i).removeClass("past");
      timeBlocks.eq(i).addClass("present");
      timeBlocks.eq(i).removeClass("future");

    } if (currentTime >= 12 && currentTime < 18) {
      // Morning color scheme
      timeBlocks.eq(i).removeClass("past");
      timeBlocks.eq(i).addClass("present");
      timeBlocks.eq(i).removeClass("future");
    } else {
      // Night color scheme
      timeBlocks.eq(i).removeClass("past");
      timeBlocks.eq(i).addClass("present");
      timeBlocks.eq(i).removeClass("future");
    }
  
  };
});
