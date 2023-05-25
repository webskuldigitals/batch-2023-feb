$(document).ready(function(){
    $('input.success').focus(function(){
        $('input.success').addClass('error').css({background: 'blue', color: 'yellow'})
    })

    $('input.success').blur(function(){
        $(this).removeClass('error')
    })

    $('[name="addNewInput"]').click(function(){
        var input = $('input.success.new-input');
        $('input.success').removeClass('new-input')
        var newInput = "<input class='success new-input'>";
        input.before(newInput)
        $(this).fadeOut('slow')
    })

    $('[name="addNewDistrict"]').click(function(){

        $(this).attr('data-id', 'abc')

        var select = $('<select>')
                        .addClass('district-list')
                        .append($('<option>')
                                    .val('Mirzapur')
                                    .html('Mirzapur')
                                )
        $('.input-container').prepend(select)

        $(this).remove()
    })

    $('#cloneInputContainer').click(function(){
        var clonedDiv = $('.input-container').clone().css('background', 'red')
        $('.input-container').after(clonedDiv);
    })
    
    $('.fade').fadeIn('fast')


    $('.toggle-class').click(function(){
        $(this).toggleClass('error')
    })
})