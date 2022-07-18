CommonJS :
  assert = require('assert');
 let countAllFromTown = require("../countAllFromTown");

 describe('Testing the countAllFromTown function' , function(){
    it( 'should return 3 plates from Stelll', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
         });
    it('should rreturn 1 platefromKuilsriver ' , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)
 });
    it("should return  when there is no name called" , function () {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CA 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 0)
       
    });

});