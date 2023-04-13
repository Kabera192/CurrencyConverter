$(function(){
    var rate = {"USD":1030, "EURO":1200, "JPY":160, "GBP":1700};
    let rateAmount= rate["USD"] ; // get the initial rate amout
    

    // $("#currency-rate").val(rate["USD"]); // initial currency

    $("#select-currency").change(function(){ // when a currency is selected
        let rateSymbol = $(this).val(); // get the rate symbol
        rateAmount = rate[rateSymbol]; // overiding variable
        $("#currency-rate").val(rateAmount);
    });

    $("#convert").on('click', function(e){
        e.preventDefault();
        let amountFrom = $("#amountFrom").val();
        if(amountFrom == ''){
            alert("Please add amount to be comverted");
            return;
        }
        converter(amountFrom, rateAmount);
    });

    function converter(x, y){
        console.log(x + " " + y)
        let w = parseInt(x) * parseInt(y);
        console.log(w);
        $("#amountTo").val(w);
    }
    
        
});




// $("#btn1").click(function(){
//     alert("Button Clicked");
// });

// $("#btn2").click(function(){
//     $(".para2").hide();
// });


// $("#gender").change(function(){
    
// })