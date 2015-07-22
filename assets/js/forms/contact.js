var ContactForm = function () {

    return {
        
        //Contact Form
        initContactForm: function () {
	        // Validation
	        $("#sky-form3").validate({
	            // Rules for form validation
	            rules:
	            {
	                subject:
	                {
	                    required: true,
                            minlength: 5
	                },
	                date:
	                {
	                    required: true,
	                },
	                message:
	                {
	                    required: true,
	                    minlength: 20
	                },
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                subject:
	                {
	                    required: 'Please enter your subject',
	                },
	                date:
	                {
	                    required: 'Please enter your publish date',
	                },
	                message:
	                {
	                    required: 'Please enter your message'
	                },
	            },
	                                
	            // Ajax form submition                  
	            submitHandler: function(form)
	            {
	                $(form).ajaxSubmit(
	                {
	                    beforeSend: function()
	                    {
	                        $('#sky-form3 button[type="submit"]').attr('disabled', true);
	                    },
	                    success: function()
	                    {
	                        $("#sky-form3").addClass('submited');
	                    }
	                });
	            },
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element.parent());
	            }
	        });
        }

    };
    
}();