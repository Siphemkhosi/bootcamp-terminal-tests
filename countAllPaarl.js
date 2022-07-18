CommonJS:
module.exports = function countAllPaarl(paarlRegs){
  
    var countForPaarl = paarlRegs.split(", ");
    var countPaarl = 0;
      for(var i=0; i<countForPaarl.length; i++){
      if(countForPaarl[i].startsWith("CJ")){
     countPaarl = countPaarl + 1;
      }
      }
      console.log(countPaarl)
      return countPaarl;
    }