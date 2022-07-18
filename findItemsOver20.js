module.exports = function findItemsOver20(findItems){
    var objectList = findItems;
      var newList =[];
      for(var i=0; i<objectList.length;i++){
      var list = objectList[i]
      if(list["qty"] > 20){
      newList.push(list);
      }
         }
       return newList;         
    }
     