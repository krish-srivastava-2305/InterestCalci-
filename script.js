function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
function compute()
{
    var p = document.getElementById("principal").value;
    var rt = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var i = p*rt*y/100;
    var a = parseInt(p) + parseFloat(i);
    var r = document.getElementById("result");
    var y1 = new Date().getFullYear()+  parseInt(y);
    if(p<=0){
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }
    else{
        r.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rt + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + a + "</mark>" + ",\<br\> in the year " + "<mark>" + y1 + "</mark>" + "\<br\>";
    }
}
