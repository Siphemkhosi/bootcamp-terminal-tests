module.exports = function totalPhoneBill(billCost){
    var totalBill = billCost.split(", ");
    var smsCost = 0;
    var callCost = 0;
    for(var i = 0; i <totalBill.length; i++){
     var items = totalBill[i];
    if(items === "call"){
    callCost += 2.75
     //console.log(smsCost)
    }else if(items ==="sms"){
    smsCost += 0.65;
     //console.log(callCost)
    }
     var totalCost = callCost + smsCost;
     console.log(totalCost)
    }
     return "R" + totalCost.toFixed(2);
    }
    