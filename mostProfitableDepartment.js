module.exports = function mostProfitableDepartment(department){
    var profitableDepart = department;
     // console.log(profitableDepart)
    var counter = {};
    for(var i=0; i< profitableDepart.length;i++){
    const List = profitableDepart[i];
      if(counter[List["department"]] === undefined){
      counter[List["department"]] = 0;
      }{
     counter[List["department"]] += List["sales"]
      }
      counter[List]++;
    }
      //console.log(counter)
      var mostProfitableDepartment = "";
      //console.log(mostProfitableDeparytment);
      var mostSale = 0;
      for(var depart in counter){
          if(counter[depart] > mostSale){
          mostSale = counter[depart];
          mostProfitableDepartment = depart;
          }
      }
      return mostProfitableDepartment;
    }
    
    
    