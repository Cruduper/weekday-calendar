import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import dayNamer from './js/dayNamer.js';



$(document).ready(function() {
  $("#start-button").click( function(){
    const datePicked = $("#date-picker").val();
    

    const dateArr = datePicked.split("-");

    const dayOfWeek = dayNamer(dateArr[0], dateArr[1], dateArr[2]);
  
    $("#input").addClass("hidden");
    $("#output").removeClass("hidden");
    $("#output-date").text(datePicked);
    $("#output-day").text(dayOfWeek);
  });

  $("#reset-button").click( function(){
    location.reload(true);
  });
});