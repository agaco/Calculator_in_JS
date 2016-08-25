$(document).ready(function(){
	
    var $buttonDigit = $("div.number");
    var $buttonPlus = $(".operator");
    var $inputScreen = $("input");
    //console.log($buttonDigit);
    var $digitValue;   
    var $screen;
    var $buttonSum = $("div.sum");
    var sum = 0;
    
    $buttonDigit.on("click", function(event){
        var $dataNumber = $(this).text();
        $(this).attr("data-number", $dataNumber);
        
        $digitValue = $(this).data("number");
        
        $inputScreen.val($("input").val() + ($digitValue));  
        $screen =  $inputScreen.val();
        console.log("zawartosc ekranu: " + $screen);
    });
    
    
    $buttonSum.on("click", function(event){
    
        console.log("zawartosc ekranu: " + $screen);
        var split = $screen.split('+');
        console.log(split);
        for (var i = 0; i < split.length; i++) {
           console.log(parseInt(split[i], 10));
            
            sum += parseInt(split[i], 10);
            console.log(sum)
            $inputScreen.val("sum is: " + sum);
        }
    });
});