module.exports = function transportFee(shiftPrices){
    switch(shiftPrices){
      case "morning":
    return "R20";
      case "afternoon":
    return "R10";
      default:
    return "free";}
    }
    