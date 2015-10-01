var PartnerForm = function () {

    return {
        
        //Partner Form
        initPartnerForm: function () {
	        // Masking
	        $('#zip').mask('99-999', {placeholder:'X'});
	        $('#cor_zip').mask('99-999', {placeholder:'X'});
	        
	        // Add validation method
	        $.validator.addMethod("zip_code", function(value, element, param) {
	                return value.match(/\d/g).length===5;
	        },
	        $.validator.format('Wprowadź poprawy kod pocztowy'));
	        
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
                        service_desc:
	                {
	                    required: true
                    
	                },
	            },
	            // Messages for form validation
	            messages:
	            {
                        name:
	                {
	                    required: 'Wprowadź nazwę partnera'
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
                        street:
	                {
	                    required: 'Wporowadź nazwę ulicy'
                        },
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