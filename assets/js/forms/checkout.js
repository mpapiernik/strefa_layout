var CheckoutForm = function () {

    return {
        
        //Checkout Form
        initCheckoutForm: function () {
	        // Masking
	        $('#cvv').mask('999', {placeholder:'X'});
	        $('#card').mask('9999-9999-9999-9999', {placeholder:'X'});
	        $('#year').mask('2099', {placeholder:'X'});
	        
	        // Add validation method
	        $.validator.addMethod("creditcard", function(value, element, param) {
	            if( /[^0-9\-]+/.test(value) )
	            {
	                return false;
	            }
	        },
	        $.validator.format('Please enter a valid credit card number.'));
	        
	        // Validation
	        $('#sky-form').validate({
	            // Rules for form validation
	            rules:
	            {
	                fname:
	                {
	                    required: true
	                },
	                lname:
	                {
	                    required: true
	                },
	                email:
	                {
	                    required: true,
	                    email: true
	                },
                        login:
	                {
	                    required: true
	                },
	                phone:
	                {
	                    required: true
	                },
	                country:
	                {
	                    required: true
	                },
	                city:
	                {
	                    required: true
	                },
	                code:
	                {
	                    required: true,
	                    digits: true
	                },
	                address:
	                {
	                    required: true
	                },
	                name:
	                {
	                    required: true
	                },
	                card:
	                {
	                    required: true,
	                    creditcard: true
	                },
	                cvv:
	                {
	                    required: true,
	                    digits: true
	                },
	                month:
	                {
	                    required: true
	                },
	                year:
	                {
	                    required: true,
	                    digits: true
	                },
                        password:
	                {
	                    required: true,
	                    minlength: 8,
	                    maxlength: 30
	                },
	                passwordConfirm:
	                {
	                    required: true,
	                    minlength: 8,
	                    maxlength: 30,
	                    equalTo: '#password'
	                },
                        
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                fname:
	                {
	                    required: 'Wpisz imię'
	                },
	                lname:
	                {
	                    required: 'Wpisz nazwisko'
	                },
                        login:
	                {
	                    required: 'Wpisz login operatora'
	                },
	                email:
	                {
	                    required: 'Wpisz adres e-mail',
	                    email: 'Wpisz poprawny adres e-mail'
	                },
	                phone:
	                {
	                    required: 'Wpisz telefon kontaktowy'
	                },
	                country:
	                {
	                    required: 'Wybierz kraj'
	                },
	                city:
	                {
	                    required: 'Wpisz nazwe miasta'
	                },
	                code:
	                {
	                    required: 'Please enter code',
	                    digits: 'Digits only please'
	                },
	                address:
	                {
	                    required: 'Please enter your full address'
	                },
	                name:
	                {
	                    required: 'Please enter name on your card'
	                },
	                card:
	                {
	                    required: 'Please enter your card number'
	                },
	                cvv:
	                {
	                    required: 'Enter CVV2',
	                    digits: 'Digits only'
	                },
	                month:
	                {
	                    required: 'Select month'
	                },
	                year:
	                {
	                    required: 'Enter year',
	                    digits: 'Digits only please'
	                },
                        password:
	                {
	                    required: 'Wpisz hasło'
	                },
	                passwordConfirm:
	                {
	                    required: 'Wpisz hasło',
	                    equalTo: 'Wpisane hasła się różnią'
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