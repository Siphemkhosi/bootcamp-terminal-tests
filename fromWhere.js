module.exports = function fromWhere(carRegNumber){
    switch (carRegNumber){
      case "CY":
       return "Bellville"; 
      case "CJ":
      return "Paarl";
      case "CA":
      return "Cape Town";
      default:
      return "Some other place!";
                        }                  
    }

    