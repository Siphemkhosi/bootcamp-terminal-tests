module.exports = function yearsAgo(year){
    const yearsFrom = new Date();
    return yearsFrom.getFullYear() - year;
  } 