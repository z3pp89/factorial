var factorial = function(number){
    var output = 1;
    for(var i=number; i>0; i--){
        output = output*i;
    }
    return output;

};

$(document).ready(function(){
    $("#form").submit(function(event){
        event.preventDefault();
        var number = parseInt($("#num").val());
        $("#result").text(factorial(number));
}); 
});

        
     
