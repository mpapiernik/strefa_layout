jQuery(document).ready(function () {
    App.init();
});
$(function () {
   var interest = 105;
    //document.getElementById("rental_interest_output").value = interest;
    var slider = document.getElementById("rent_amount_slider");
    var sliderInput = document.getElementById("rent_amount_input");
    var sliderMonths = document.getElementById("rent_months_slider");
    var sliderMonthsInput = document.getElementById("rent_months_input");
    var installmentAmountOutput = document.getElementById("installment_amount");
    var rentalAmountOutput = document.getElementById("rental_amount");
    installmentAmountOutput.innerHTML = slider.value; // Display the default slider value

    var months = 12;
    var rentalAmmount = 1000;
    rentalAmountOutput.value = (Math.round((rentalAmmount * interest)) / 100).toFixed(2);
    installmentAmountOutput.value = (Math.round((rentalAmmount * interest)) /months / 100).toFixed(2);
    rentalAmountOutput.value

    sliderMonths.oninput = function() {
        months = this.value;
        rentalAmountOutput.value = (Math.round((rentalAmmount * interest)) / 100).toFixed(2);
        installmentAmountOutput.value = (Math.round((rentalAmmount * interest)) /months / 100).toFixed(2);
    }

    sliderMonthsInput.oninput = function() {
        months = sliderMonths.value;
        rentalAmountOutput.value = (Math.round((rentalAmmount * interest)) / 100).toFixed(2);
        installmentAmountOutput.value = (Math.round((rentalAmmount * interest)) /months / 100).toFixed(2);
    }

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        rentalAmmount = this.value;
        rentalAmountOutput.value = (Math.round((rentalAmmount * interest)) / 100).toFixed(2);
        installmentAmountOutput.value = (Math.round((rentalAmmount * interest)) /months / 100).toFixed(2);
    }

    sliderInput.oninput = function() {
        rentalAmmount = this.value;
        rentalAmountOutput.value = (Math.round((rentalAmmount * interest)) / 100).toFixed(2);
        installmentAmountOutput.value = (Math.round((rentalAmmount * interest)) /months / 100).toFixed(2);
    }
});