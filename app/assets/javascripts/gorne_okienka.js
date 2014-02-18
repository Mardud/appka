/**
 * Created by kanaran on 18.02.14.
 */

/* Klikanie make */
$(document).ready(function(){
    $(document).on('click', '#makeCel',function () {
        var goal= ''
        goal += "<p><input type='textbox' value = " + "'" + $('#makeG').val() +  "'" + " id='finalname'>" + "</p>"
        tygodnie = $('#weeks').val()
        cykle = $('#cycles').val()
        $('#makeGoal').html("");
        $("<h1 style='margin-left: 12%;'>Dzień</h1><p><input type='textbox' id='dodajZadanie' style='margin-left: 12%;'></p><select id='single' style='margin-left: 12%;'><option>Day-1</option><option>Day-2</option><option>Day-3</option><option>Day-4</option><option>Day-5</option><option>Day-6</option><option>Day-7</option></select><input type='button' value='Dodaj zadanie' id='dodZad' style='margin-left: 12%;'>").appendTo('#makeGoal');
        $('#Day-1').html('');
        $('#Day-2').html('');
        $('#Day-3').html('');
        $('#Day-4').html('');
        $('#Day-5').html('');
        $('#Day-6').html('');
        $('#Day-7').html('');
        /* Klikanie dodaj zad */

        $("#dodZad").click(function () {
            var msg= ''
            var dzionek = '#'
            dzionek += $( "#single" ).val()
            msg += "<p>" +'<input type="checkbox" >'+ $('#dodajZadanie').val() + "</p>"
            $( msg ).appendTo(dzionek);
        });

/* RWORZENIE POLA Z CELEM I TYGODNIEM */
$('#Goals').html("");

$( goal ).appendTo('#Goals');
$( '<p id="tydzien">Week : ' + week + '</p>').appendTo('#Goals');
$( "<p><input type='button' value='Dodaj Goal' id='dodGoal'></p>").appendTo('#Goals');

/* POWROT DO KALENDARZA */
$(document).on('click', '#dodGoal',function() {
    var nazwa = $('#finalname').val()
    $.ajax({
    url: '/goals',
    type: 'POST',
    data: {goal: {name:nazwa  ,cycle:tygodnie, cycles:cykle, start:false}},
dataType: 'json'
});

$.ajax({
    url: '/goals',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
    $('#Goals').html('');
    war = [];
    for(var i =0; i < data.length; i++){
    war.push(data[i].id);
    if(data[i].start){
    goal = ("<input type='button' value=" + "'" + data[i].name + "'" +" id='Cel" + i + "'" + " style='width: 290px; background-color:lightgreen;' >")
    $('#Goals').append(goal);
    $button = $("<input type='button' value='Usun' data-id='" + war[i] + "'" + " style='width: 45px; background-color:red;'>").click(function () { $.post('/goals/' + $(this).data("id"), {'_method':'delete'});});
$('#Goals').append($button);
}
else{
    $goal = $("<input type='button' value=" + "'" + data[i].name + "'" +" data-id=" + war[i] + "'" + " style='width: 290px;' >").click(function () { $.ajax({
        url: '/goals/' + $(this).data("id"),
        type: 'PUT',
        data: {start:'true'}
});
});
$('#Goals').append($goal);
$button = $("<a href='/goals/" + war[i] + "' data-remote='true' data-method='delete' data-type='json'>Usun</a>");
$('#Goals').append($button);
}
}
}
});
$('#makeGoal').html('');
$('#makeGoal').append("<h1 style='margin-left: 34%;'> Goal </h1><p><input type='textbox' id='makeG' style='margin-left: 12%;' ></p><input type='button' value='Make' id='makeCel' style='margin-left: 34%;'><p><select id='weeks' style='margin-left: 12%;'><option>1</option><option>2</option><option>3</option><option>4</option></select></p><input type='textbox' id='cycles' style='margin-left: 12%;' ></p>");
    $('#Day-1').html('');
    $('#Day-2').html('');
    $('#Day-3').html('');
    $('#Day-4').html('');
    $('#Day-5').html('');
    $('#Day-6').html('');
    $('#Day-7').html('');
    });

    });
    });
