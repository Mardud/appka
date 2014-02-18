
$(document).ready(function(){
    function displayVals() {
        var singleValues = $( "#single" ).val() || [];
        $( "#dzien" ).text(singleValues);
    }

$( "select" ).change( displayVals );
displayVals();
});
/**
 * Created by kanaran on 18.02.14.
 */
