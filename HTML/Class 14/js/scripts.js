$(document).ready(function(){

    var addresses;

    $(document).on('keyup', '#pincode', function(){
        
        if($(this).val().length == 6){
            $.get('https://api.postalpincode.in/pincode/' + $(this).val(), function(data){
            
                addresses = data;

                for(var i = 0; i < (data[0].PostOffice.length); i++){
                    var option = $('<option value="'+i+'">').html(
                            data[0].PostOffice[i].Name + '-' + 
                            data[0].PostOffice[i].District + '-' +  
                            data[0].PostOffice[i].State + '-' +  
                            data[0].PostOffice[i].Country
                        )

                    $('#addresses').append(option)

                    $('#addresses').show();
                    
                    $("#addresses").trigger("chosen:updated");

                    $('#addresses').chosen();

                    $('#addresses').hide();

                }
            })
        }

    })

    $('#addresses').change(function(){
        $('#city').val(addresses[0].PostOffice[$(this).val()].District);
        $('#state').val(addresses[0].PostOffice[$(this).val()].State);
        $('#country').val(addresses[0].PostOffice[$(this).val()].Country);
        $('#post').val(addresses[0].PostOffice[$(this).val()].Name);
    })

});