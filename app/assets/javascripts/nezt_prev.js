
$(document).ready(function(){

    $('#Next').click(function() {
        if (week == 1)
        {
            day1week1 = $("#Day-1").html()
            day2week1 = $("#Day-2").html()
            day3week1 = $("#Day-3").html()
            day4week1 = $("#Day-4").html()
            day5week1 = $("#Day-5").html()
            day6week1 = $("#Day-6").html()
            day7week1 = $("#Day-7").html()
            $('#Day-1').html('');
            $('#Day-2').html('');
            $('#Day-3').html('');
            $('#Day-4').html('');
            $('#Day-5').html('');
            $('#Day-6').html('');
            $('#Day-7').html('');
            $('#Day-1').append(day1week2)
            $('#Day-2').append(day2week2)
            $('#Day-3').append(day3week2)
            $('#Day-4').append(day4week2)
            $('#Day-5').append(day5week2)
            $('#Day-6').append(day6week2)
            $('#Day-7').append(day7week2)
        }
else if (week == 2){
    day1week2 = $("#Day-1").html()
    day2week2 = $("#Day-2").html()
    day3week2 = $("#Day-3").html()
    day4week2 = $("#Day-4").html()
    day5week2 = $("#Day-5").html()
    day6week2 = $("#Day-6").html()
    day7week2 = $("#Day-7").html()
    $('#Day-1').html('');
    $('#Day-2').html('');
    $('#Day-3').html('');
    $('#Day-4').html('');
    $('#Day-5').html('');
    $('#Day-6').html('');
    $('#Day-7').html('');
    $('#Day-1').append(day1week3)
    $('#Day-2').append(day2week3)
    $('#Day-3').append(day3week3)
    $('#Day-4').append(day4week3)
    $('#Day-5').append(day5week3)
    $('#Day-6').append(day6week3)
    $('#Day-7').append(day7week3)
    }
else if (week == 3){
    day1week3 = $("#Day-1").html()
    day2week3 = $("#Day-2").html()
    day3week3 = $("#Day-3").html()
    day4week3 = $("#Day-4").html()
    day5week3 = $("#Day-5").html()
    day6week3 = $("#Day-6").html()
    day7week3 = $("#Day-7").html()
    $('#Day-1').html('');
    $('#Day-2').html('');
    $('#Day-3').html('');
    $('#Day-4').html('');
    $('#Day-5').html('');
    $('#Day-6').html('');
    $('#Day-7').html('');
    $('#Day-1').append(day1week4)
    $('#Day-2').append(day2week4)
    $('#Day-3').append(day3week4)
    $('#Day-4').append(day4week4)
    $('#Day-5').append(day5week4)
    $('#Day-6').append(day6week4)
    $('#Day-7').append(day7week4)
    }
else if (week == 4){
    day1week4 = $("#Day-1").html()
    day2week4 = $("#Day-2").html()
    day3week4 = $("#Day-3").html()
    day4week4 = $("#Day-4").html()
    day5week4 = $("#Day-5").html()
    day6week4 = $("#Day-6").html()
    day7week4 = $("#Day-7").html()
    $('#Day-1').html('');
    $('#Day-2').html('');
    $('#Day-3').html('');
    $('#Day-4').html('');
    $('#Day-5').html('');
    $('#Day-6').html('');
    $('#Day-7').html('');
    $('#Day-1').append(day1week1)
    $('#Day-2').append(day2week1)
    $('#Day-3').append(day3week1)
    $('#Day-4').append(day4week1)
    $('#Day-5').append(day5week1)
    $('#Day-6').append(day6week1)
    $('#Day-7').append(day7week1)
    }
if (week < 4){
    week += 1}
else{
    week = 1}
$('#tydzien').text('');
            $('#tydzien').append('Week : ' + week);
});
$('#Previous').click(function() {
            if (week <= 4 && week > 1){
                week -= 1}
            else{
                week = 4}
            $('#tydzien').text('');
            $('#tydzien').append('Week : ' + week);
if (week == 4)
            {
                day1week1 = $("#Day-1").html()
                day2week1 = $("#Day-2").html()
                day3week1 = $("#Day-3").html()
                day4week1 = $("#Day-4").html()
                day5week1 = $("#Day-5").html()
                day6week1 = $("#Day-6").html()
                day7week1 = $("#Day-7").html()
                $('#Day-1').html('');
                $('#Day-2').html('');
                $('#Day-3').html('');
                $('#Day-4').html('');
                $('#Day-5').html('');
                $('#Day-6').html('');
                $('#Day-7').html('');
                $('#Day-1').append(day1week4)
                $('#Day-2').append(day2week4)
                $('#Day-3').append(day3week4)
                $('#Day-4').append(day4week4)
                $('#Day-5').append(day5week4)
                $('#Day-6').append(day6week4)
                $('#Day-7').append(day7week4)
                }
else if (week == 3){
    day1week4 = $("#Day-1").html()
    day2week4 = $("#Day-2").html()
    day3week4 = $("#Day-3").html()
    day4week4 = $("#Day-4").html()
    day5week4 = $("#Day-5").html()
    day6week4 = $("#Day-6").html()
    day7week4 = $("#Day-7").html()
    $('#Day-1').html('');
    $('#Day-2').html('');
    $('#Day-3').html('');
    $('#Day-4').html('');
    $('#Day-5').html('');
    $('#Day-6').html('');
    $('#Day-7').html('');
    $('#Day-1').append(day1week3)
    $('#Day-2').append(day2week3)
    $('#Day-3').append(day3week3)
    $('#Day-4').append(day4week3)
    $('#Day-5').append(day5week3)
    $('#Day-6').append(day6week3)
    $('#Day-7').append(day7week3)
    }
else if (week == 2){
    day1week3 = $("#Day-1").html()
    day2week3 = $("#Day-2").html()
    day3week3 = $("#Day-3").html()
    day4week3 = $("#Day-4").html()
    day5week3 = $("#Day-5").html()
    day6week3 = $("#Day-6").html()
    day7week3 = $("#Day-7").html()
    $('#Day-1').html('');
    $('#Day-2').html('');
    $('#Day-3').html('');
    $('#Day-4').html('');
    $('#Day-5').html('');
    $('#Day-6').html('');
    $('#Day-7').html('');
    $('#Day-1').append(day1week2)
    $('#Day-2').append(day2week2)
    $('#Day-3').append(day3week2)
    $('#Day-4').append(day4week2)
    $('#Day-5').append(day5week2)
    $('#Day-6').append(day6week2)
    $('#Day-7').append(day7week2)
    }
else if (week == 1){
    day1week2 = $("#Day-1").html()
    day2week2 = $("#Day-2").html()
    day3week2 = $("#Day-3").html()
    day4week2 = $("#Day-4").html()
    day5week2 = $("#Day-5").html()
    day6week2 = $("#Day-6").html()
    day7week2 = $("#Day-7").html()
    $('#Day-1').html('');
    $('#Day-2').html('');
    $('#Day-3').html('');
    $('#Day-4').html('');
    $('#Day-5').html('');
    $('#Day-6').html('');
    $('#Day-7').html('');
    $('#Day-1').append(day1week1)
    $('#Day-2').append(day2week1)
    $('#Day-3').append(day3week1)
    $('#Day-4').append(day4week1)
    $('#Day-5').append(day5week1)
    $('#Day-6').append(day6week1)
    $('#Day-7').append(day7week1)
    }
});
});
 /**
 * Created by kanaran on 18.02.14.
 */
