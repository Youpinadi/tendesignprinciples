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
    $('h1').slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":380
    });

    if ($.cookie('invert'))
    {
        $('body').addClass('invert');
    }

    $('#color').click(function(){
        invertColors();
    });
});
