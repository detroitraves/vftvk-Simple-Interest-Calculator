/*Main Calulator Function*/
function compute()
{   
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if (validatePrincipal()){
        var calculatedAmount = parseFloat(interest);
        var response = "If you deposit <span class='highlight'>" + principal + "</span>,<br/>" +"at an interest rate of <span class='highlight'>" + rate + "%.</span><br/>You will receive an amount of <span class='highlight'>" + calculatedAmount + "</span>, <br/>in the year <span class='highlight'>" + year +"</span>.";
        document.getElementById("result").innerHTML = response;
    }

    
}

/* Update the displayed rate when the slider is moved*/
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
/*Validate Principal Input - Must be positive*/
function validatePrincipal()
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0){
        alert("Enter a positive number.");
        focus = document.getElementById("principal").focus();
        return false;
    }
    return true;
}
