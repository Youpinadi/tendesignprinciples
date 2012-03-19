function invertColors()
{
    $('body').toggleClass('invert');
    $.cookie('invert', $('body').hasClass('invert'));
}
function konami()
{
    setInterval
    (
        function()
        {
            $('li .explain:eq(' + parseInt(Math.random() * 10) + ')').slideToggle('slow');
        },
        200
    );
}

var code = [38,38,40,40,37,39,37,39,66,65];
var index = 0;

$(document).ready(function() {
    if ($.cookie('invert'))
    {
        $('body').addClass('invert');
    }

    $('#color').click(function(){
        invertColors();
    });
    $('li,.author').click(function(){
        $(this).children('.explain').slideToggle('slow');
    });
    $('#unfold').click(function(){
        if($('#unfold').html() == '+')
        {
            $('.explain').slideDown('slow');
            $('#unfold').html('-').attr('title', 'fold all')
        }
        else
        {
            $('.explain').slideUp('slow');
            $('#unfold').html('+').attr('title', 'unfold all');
        }
    });
    $(document).keyup(function(event){
        // 1 to 9 keys
        if (event.keyCode >= 49 && event.keyCode <= 59) {
            $('li .explain:eq(' + (event.keyCode - 49) +')').slideToggle('slow');
        }
        
        if (event.keyCode == code[index])
        {
            
            if (index == code.length - 1)
            {
                konami();
                index = 0;
            }
            index++;
        }
        else
        {
            index = 0;
        }
        
        switch(event.keyCode)
        {
            // "-" key
            case 109:
                $('.explain').slideUp('slow');
                break;
            // "+" key
            case 107:
                $('.explain').slideDown('slow');
                break;
            // "i" key
            case 73:
                invertColors();
                break;
        }
    });

});
