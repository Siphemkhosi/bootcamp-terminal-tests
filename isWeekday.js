module.exports = function isWeekday(days){
    var weekdays =  !(days.startsWith("S"));
   //var weekdays = ["Sunday", "Monday","Tuesday","Wednesday", "Thursday","Friday", "Saturday"]
   return weekdays
   }