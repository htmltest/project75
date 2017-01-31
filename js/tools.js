$(document).ready(function() {

    $('form').validate({
        submitHandler: function(form) {
            $.ajax({
                type: 'POST',
                url: $('form').attr('action'),
                dataType: 'html',
                data: $('form').serialize(),
                cache: false
            }).done(function(html) {
                $('.form-result').html(html);
            });
        }
    });

});

$(window).on('load resize', function() {
    if ($(window).width() > 1000) {
        $('body').css({'font-size': 25 * $(window).height() / 1043 + 'px'});
    } else {
        $('body').css({'font-size': '20px'});
    }
});