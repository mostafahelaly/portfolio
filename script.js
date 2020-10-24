$(document).ready(function () {
    // $('.pic-cont').on('click', function () {
    //     var picid = $(this).attr("data-pic");
    //     $(picid).fadeToggle(1000);
    //     $(picid + "-text").hide();
    // });

    $("form[name='contact']").validate({
        rules: {
            yourname: "required",
            email:{
                required: true, email: true
            },
            message: "required"
        },

        messages: {
            yourname: "Please enter your name",
            email: "Please enter a valid email",
            message: "Please enter a message"
        },

        submitHandler: function(form){
            form.submit();
        }
    });
});