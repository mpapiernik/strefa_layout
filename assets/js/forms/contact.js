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
                        name:
	                {
	                    required: true
	                },
                         email:
	                {
	                    required: true,
	                    email: true
	                },
	                date:
	                {
	                    required: true,
	                },
	                message:
	                {
	                    required: true,
	                    minlength: 10
	                },
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                subject:
	                {
	                    required: 'Wpisz tytuł',
	                },
                        name:
	                {
	                    required: 'Wpisz imię i nazwisko'
	                },
                        email:
	                {
	                    required: 'Wpisz adres e-mail',
	                    email: 'Wpisz poprawny adres e-mail'
	                },
	                message:
	                {
	                    required: 'Wpisz wiadomość'
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