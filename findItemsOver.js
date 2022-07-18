module.exports = function findItemsOver(findItem, threshold){
    var objectLists = findItem;
    var newLists = [];
    for(var i = 0; i < objectLists.length; i++){
    var lists = objectLists[i]
    if(lists["qty"] > threshold){
    newLists.push(lists);
    }
    }
       return newLists;   
  }