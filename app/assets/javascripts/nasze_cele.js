var war = []
var cycle = []
$(document).ready(function(){
    for(var j = 0; j<war.length; j++){
    $.getJSON('/goals/' + war[j] +'/weeks',function(data){
    for(var i=0;i<4; i++){
    if(data[i]){
    weeks_id.push(data[i].id);
    }
}
});
}
$.getJSON('/goals', function(data) {
    for(var i = 0; i<data.length; i++){
    war.push(data[i].id);
    cycle.push(data[i].cycle);
    if(data[i].start){
    goal = ("<input type='button' value=" + "'" + data[i].name + "'" +" id='Cel" + i + "'" + " style='width: 290px; background-color:lightgreen;' >")
    $('#Goals').append(goal);
    $button = $("<a href='/goals/" + war[i] + "' data-remote='true' data-method='delete' data-type='json'>Usun</a>");
    $button = $("<input type='button' value='Usun' data-id='" + war[i] + "'" + " style='width: 45px; background-color:red;'>").click(function () { $.post('/goals/' + $(this).data("id"), {'_method':'delete'});  });
$('#Goals').append($button);
}
else{
    $goal = $("<input type='button' value=" + "'" + data[i].name + "'" +" data-id=" + war[i] + "'" + " style='width: 290px;' >").click(function () {
        $.ajax({
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
});
});
/**
 * Created by kanaran on 18.02.14.
 */
