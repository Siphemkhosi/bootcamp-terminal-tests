module.exports = function(townRegNumber,startString){
    var allFromTown = townRegNumber.split(",");
      var countForTown = 0;
     // console.log(countForTown);
      for(var i=0; i< allFromTown.length; i++){
      if(allFromTown[i].includes(startString)){
      countForTown++
        
      }
      }
    //console.log(countForTown)
    return countForTown;
    }




