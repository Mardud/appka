var days_id = []
var weeks_id = []
var tasks_id = []
var dates = []
$(document).ready(function(){
    $('#zalButton').click(function(){
        for(var i=0; i<war.length; i++){
            $.getJSON('/goals/' + war[i] +'/weeks',function(data){
                for(var gols=0;gols<4; gols++){
                    if(data[gols]){
                        weeks_id.push(data[gols].id);
                        $.getJSON('/weeks/' + data[gols].id + '/days',function(data){
                            for(day=0; day<7; day++){
                                if(data[day]){
                                    days_id.push(data[day].id);
                                    $.getJSON('/days/' + data[day].id + '/tasks',function(data){
                                        for(task=0; task<data.length; task++){
                                            if(data[task]){
                                                tasks_id.push(data[task].id);
                                                for(var taskdate=0; taskdate<((data[task].date).split("|")).length ; taskdate++){
                                                    dates.push(((data[task].date).split("|"))[taskdate])
                                                }
for(var datestask = 0; datestask < dates.length; datestask ++){
    if(jQuery.inArray(dates[datestask], good_date)>=0){
    if(good_date.indexOf(dates[datestask]) == 0){
    if(data[task].done){
    $('#Day-1').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" checked="checked" disabled="disabled" >'+ '</p>');
    delete dates[datestask];
    break;
    }
else{
    $('#Day-1').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" >'+ '</p>');
    delete dates[datestask];
    break;
    }
}
if(good_date.indexOf(dates[datestask]) == 1){
    if(data[task].done){
    $('#Day-2').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" checked="checked" disabled="disabled" >'+ '</p>');
    delete dates[datestask];
    break;
    }
else{
    $('#Day-2').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" >'+ '</p>');
    delete dates[datestask];
    break;
    }
}
if(good_date.indexOf(dates[datestask]) == 2){
    if(data[task].done){
    $('#Day-3').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" checked="checked" disabled="disabled" >'+ '</p>');
    delete dates[datestask];
    break;
    }
else{
    $('#Day-3').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" >'+ '</p>');
    delete dates[datestask];
    break;
    }
}
if(good_date.indexOf(dates[datestask]) == 3){
    if(data[task].done){
    $('#Day-4').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" checked="checked" disabled="disabled" >'+ '</p>');
    delete dates[datestask];
    break;
    }
else{
    $('#Day-4').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" >'+ '</p>');
    delete dates[datestask];
    break;
    }
}
if(good_date.indexOf(dates[datestask]) == 4){
    if(data[task].done){
    $('#Day-5').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" checked="checked" disabled="disabled" >'+ '</p>');
    delete dates[datestask];
    break;
    }
else{
    $('#Day-5').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" >'+ '</p>');
    delete dates[datestask];
    break;
    }
}
if(good_date.indexOf(dates[datestask]) == 5){
    if(data[task].done){
    $('#Day-6').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" checked="checked" disabled="disabled" >'+ '</p>');
    delete dates[datestask];
    break;
    }
else{
    $('#Day-6').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" >'+ '</p>');
    delete dates[datestask];
    break;
    }
}
if(good_date.indexOf(dates[datestask]) == 6){
    if(data[task].done){
    $('#Day-7').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" checked="checked" disabled="disabled" >'+ '</p>');
    delete dates[datestask];
    break;
    }
else{
    $('#Day-7').append('<p>' + data[task].t_name + dates[datestask] +'<input type="checkbox" >'+ '</p>');
    delete dates[datestask];
    break;
    }
}

}
}
}
}
});
}
}
});
}
}
});
}
});
});
$(document).ready(function(){
    $('#zalButton2').click(function(){
        for(var i=0;i<weeks_id.length; i++){
            $.getJSON('/weeks/' + weeks_id[i] + '/days',function(data){
                for(j=0; j<7; j++){
                    if(data[j]){
                        days_id.push(data[j].id);
                    }
}
});
}
});
});
$(document).ready(function(){
    $('#zalButton3').click(function(){
        $.post('/days/' + days_id[0] + '/tasks',{t_name:"Zadanko", done:'false', date:'0'} );
});
});

