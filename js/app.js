$(document).ready(function(){
	
    var $buttonDigit = $("div.number");
    var $buttonPlus = $(".operator");
    var $inputScreen = $("input");
    var $digitValue;   
    var $screen;
    var $buttonSum = $("div.sum");
    var sum = 0;
    
	//DODAWANIE
    $buttonDigit.on("click", function(event){
        var $dataNumber = $(this).text();
        $(this).attr("data-number", $dataNumber);
        
        $digitValue = $(this).data("number");
        
        $inputScreen.val($("input").val() + ($digitValue));  
        $screen =  $inputScreen.val();
        console.log("zawartosc ekranu: " + $screen);
    });
    
    //SUMA
    $buttonSum.on("click", function(event){
        var split = $screen.split('+');
        console.log(split);
        for (var i = 0; i < split.length; i++) {
           console.log(parseInt(split[i], 10));
            
            sum += parseInt(split[i], 10);
            console.log("suma: " + sum)
			
			$("div.alert").removeClass("display");
			$("div.alert-content").html("<p> Sum is: <br>" + sum + "</p>");
	
            $inputScreen.val("");
        }
    });
	
	$("#close").on("click", function(event){
		$("div.alert").addClass("display")
		
		sum = 0;
		console.log("sumaxxx " + sum)
	})
	
	
});