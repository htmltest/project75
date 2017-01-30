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