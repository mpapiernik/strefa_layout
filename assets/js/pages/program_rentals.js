jQuery(document).ready(function () {
    App.init();


});


function refreshModalAmounts(installmentAmountOutput, rentalAmountOutput, months) {
    var rentalAmountModal = document.getElementById("rent_amount_input_modal");
    var rentalMonthsModal = document.getElementById("rent_months_input_modal");
    var rentalInstallmentModal = document.getElementById("rent_installment_input_modal");
    rentalAmountModal.value  = rentalAmountOutput;
    rentalMonthsModal.value = months;
    rentalInstallmentModal.value = installmentAmountOutput;
};

function appendToIrsGridText(rent_span_name, appenddedText) {
    var sliderAmountSpan = document.getElementById(rent_span_name);
    var spans = sliderAmountSpan.getElementsByClassName("irs-grid-text")
    for (let value of spans) {
        value.append(appenddedText);
    }
};



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
    var rentalAmount = 100000;
    rentalAmountOutput.value = (Math.round((rentalAmount * interest)) / 100).toFixed(2);
    installmentAmountOutput.value = (Math.round((rentalAmount * interest)) /months / 100).toFixed(2);

    sliderMonths.oninput = function() {
        months = this.value;
        rentalAmountOutput.value = (Math.round((rentalAmount * interest)) / 100).toFixed(2);
        installmentAmountOutput.value = (Math.round((rentalAmount * interest)) /months / 100).toFixed(2);
        refreshModalAmounts(installmentAmountOutput.value, rentalAmount, months);
    }

    sliderMonthsInput.oninput = function() {
        months = sliderMonths.value;
        rentalAmountOutput.value = (Math.round((rentalAmount * interest)) / 100).toFixed(2);
        installmentAmountOutput.value = (Math.round((rentalAmount * interest)) /months / 100).toFixed(2);
        refreshModalAmounts(installmentAmountOutput.value, rentalAmount, months);
    }

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        rentalAmount = this.value;
        rentalAmountOutput.value = (Math.round((rentalAmount * interest)) / 100).toFixed(2);
        installmentAmountOutput.value = (Math.round((rentalAmount * interest)) /months / 100).toFixed(2);
        refreshModalAmounts(installmentAmountOutput.value,rentalAmount, months);
    }

    sliderInput.oninput = function() {
        rentalAmount = this.value;
        rentalAmountOutput.value = (Math.round((rentalAmount * interest)) / 100).toFixed(2);
        installmentAmountOutput.value = (Math.round((rentalAmount * interest)) /months / 100).toFixed(2);
        refreshModalAmounts(installmentAmountOutput.value, rentalAmount, months);
    }

});

