$(document).ready(function() {

    $.getJSON( "rockbands.json", function(data) {
        console.log(data);

        // bands select
        $("<label>").attr('id', 'bandlabel').text("Bands : ").appendTo( "body" );
        $("<select>").attr('id', 'bands').appendTo( "body" );
        // $("<select>").attr('id', 'bands').insertBefore( "#bandlabel" );
        $("<option>").attr('value', "0").text("select one").prependTo("#bands"); // first option

        // fetch the bands name of each object in json file
        $.each( data, function( key, val ) {
            console.log(key);
            $("<option>").attr('value', key).text(key).appendTo("#bands")
        });

            // artist select
        $("<label>").attr('id', 'artistlabel').text(" Artist : ").appendTo( "body" );
        $("<select>").attr('id', 'artist').appendTo( "body" );
        $("<option>").attr('value', "0").text("").prependTo("#artist");

        // when user change choice
        $("#bands").on("change", function() {

            let bandValue = $("#bands option:selected").val();
            console.log(bandValue);

            // check if user choose one of bands or not
            if(bandValue !== 0) {
                // empty artist select after each choice from bands
                $('#artist option').remove();
                // set to default val of artist after each choice from bands
                $("<option>").attr('value', "0").text("").prependTo("#artist"); 

                $.each( data[bandValue], function(key, obj) {
                    $("<option>").attr('value', obj['value']).text(obj['name']).appendTo("#artist");
                });

                // set location url to the selected artist value
                $('#artist').on('change', function (){
                    let value = $('#artist option:selected').val();
                    console.log(value)
                    if (value !== 0){
                        location.replace(value);
                    }
                });
            }
        });
    });
});