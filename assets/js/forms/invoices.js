var InvoiceForm = function () {
    return {
        
        //Invoice Form
        initInvoiceForm: function () {
	        
	       
	        // Validation
	        $('#sky-form').validate({
	            // Rules for form validation
	            rules:
	            {
                        name:
	                {
	                    required: true
	                },
	                email:
	                {
	                    required: true,
	                    email: true
                        },
	                phone:
	                {
	                    required: true
	                },
                        province:
	                {
	                    required: true
                    
	                },
                        zip:
	                {
	                    required: true,
	                    zip_code: true
	                },
                        city:
	                {
	                    required: true
	                },
	                street:
	                {
	                    required: true
                        },
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
                        name:
	                {
	                    required: 'Wprowadź nazwę obiektu'
	                },
	                email:
	                {
	                    required: 'Wprowadź adres e-mail',
	                    email: 'Wprowadź poprawny adres e-mail'
	                },
	                phone:
	                {
	                    required: 'Wprowadź numer telefonu'
	                },
	                province:
	                {
	                    required: 'Wybierz województwo'
	                },
                        zip:
	                {
	                    required: 'Wprowadź kod pocztowy',
	                },
	                city:
	                {
	                    required: 'Wprowadź nazwę miasta'
                        },
	                district:
	                {
	                    required: 'Wporowadź nazwę dzielnicy'
	                },
                        street:
	                {
	                    required: 'Wporowadź nazwę ulicy'
                        }
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